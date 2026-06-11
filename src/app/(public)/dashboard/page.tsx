import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FileText, AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Dashboard - InsurenceSarthi",
  description: "User dashboard for InsurenceSarthi",
};

function getStatusBadge(status: string) {
  switch (status.toLowerCase()) {
    case "pending":
      return <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Pending</Badge>;
    case "in_review":
      return <Badge variant="outline" className="bg-orange-50 text-orange-600 border-orange-200">In Review</Badge>;
    case "resolved":
    case "completed":
    case "paid":
      return <Badge variant="outline" className="bg-green-50 text-emerald-700 border-emerald-200">Resolved</Badge>;
    case "rejected":
    case "failed":
      return <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">Rejected</Badge>;
    default:
      return <Badge variant="outline" className="capitalize">{status.replace("_", " ")}</Badge>;
  }
}

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  // Handle admin redirect
  if ((session.user as any).role === "admin") {
    redirect("/admin/dashboard");
  }

  const userId = session.user.id;

  if (!userId) {
    redirect("/login");
  }

  // Fetch all user data concurrently, including fresh user details
  const [dbUser, claims, rejectedClaims, policyReviews] = await Promise.all([
    prisma.user.findUnique({ where: { id: userId }, select: { name: true } }),
    prisma.claim.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    }),
    prisma.rejectedClaim.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    }),
    prisma.policyReview.findMany({
      where: { userId },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  const hasNoData = claims.length === 0 && rejectedClaims.length === 0 && policyReviews.length === 0;
  const displayFirstName = dbUser?.name?.split(" ")[0] || session.user.name?.split(" ")[0] || "User";

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900">
            Welcome back, {displayFirstName}
          </h1>
          <p className="text-slate-500 mt-2">
            Manage your claims, rejected claims, and policy reviews from here.
          </p>
        </div>

        {hasNoData ? (
          <Card className="border-0 shadow-sm bg-white text-center py-16">
            <CardContent className="flex flex-col items-center">
              <div className="h-20 w-20 bg-orange-50 rounded-full flex items-center justify-center mb-6">
                <ShieldCheck className="h-10 w-10 text-orange-500" />
              </div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-2">No active services yet</h2>
              <p className="text-slate-500 max-w-md mx-auto mb-8">
                You haven't submitted any claims or policy reviews yet. Explore our services to see how we can help you with your insurance needs.
              </p>
              <Link href="/services" className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-orange-500 text-white shadow hover:bg-orange-600 h-9 px-8 py-2">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Claims Section */}
            {claims.length > 0 && (
              <Card className="border-0 shadow-sm bg-white overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-orange-500" />
                    <CardTitle className="text-xl">Your Claims</CardTitle>
                  </div>
                  <CardDescription>View the status of your submitted claims</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-50/50">
                        <TableRow className="border-slate-100">
                          <TableHead className="font-semibold text-slate-600">Company</TableHead>
                          <TableHead className="font-semibold text-slate-600">Policy Number</TableHead>
                          <TableHead className="font-semibold text-slate-600">Date</TableHead>
                          <TableHead className="text-right font-semibold text-slate-600">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {claims.map((claim) => (
                          <TableRow key={claim.id} className="border-slate-100">
                            <TableCell className="font-medium text-slate-900">{claim.company}</TableCell>
                            <TableCell className="text-slate-600">{claim.policyNumber}</TableCell>
                            <TableCell className="text-slate-600">
                              {new Date(claim.createdAt).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              })}
                            </TableCell>
                            <TableCell className="text-right">
                              {getStatusBadge(claim.status)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Rejected Claims Section */}
            {rejectedClaims.length > 0 && (
              <Card className="border-0 shadow-sm bg-white overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <CardTitle className="text-xl">Rejected Claim Resolutions</CardTitle>
                  </div>
                  <CardDescription>Track our progress on your rejected claims</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-50/50">
                        <TableRow className="border-slate-100">
                          <TableHead className="font-semibold text-slate-600">Policy Number</TableHead>
                          <TableHead className="font-semibold text-slate-600">Reason Given</TableHead>
                          <TableHead className="font-semibold text-slate-600">Date</TableHead>
                          <TableHead className="text-right font-semibold text-slate-600">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {rejectedClaims.map((claim) => (
                          <TableRow key={claim.id} className="border-slate-100">
                            <TableCell className="font-medium text-slate-900">{claim.policyNumber || "N/A"}</TableCell>
                            <TableCell className="text-slate-600 truncate max-w-xs">{claim.reason}</TableCell>
                            <TableCell className="text-slate-600">
                              {new Date(claim.createdAt).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              })}
                            </TableCell>
                            <TableCell className="text-right">
                              {getStatusBadge(claim.status)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Policy Reviews Section */}
            {policyReviews.length > 0 && (
              <Card className="border-0 shadow-sm bg-white overflow-hidden">
                <CardHeader className="bg-white border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-emerald-600" />
                    <CardTitle className="text-xl">Policy Reviews</CardTitle>
                  </div>
                  <CardDescription>Status of your policy analysis and reviews</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader className="bg-slate-50/50">
                        <TableRow className="border-slate-100">
                          <TableHead className="font-semibold text-slate-600">Name</TableHead>
                          <TableHead className="font-semibold text-slate-600">Payment</TableHead>
                          <TableHead className="font-semibold text-slate-600">Date</TableHead>
                          <TableHead className="text-right font-semibold text-slate-600">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {policyReviews.map((review) => (
                          <TableRow key={review.id} className="border-slate-100">
                            <TableCell className="font-medium text-slate-900">{review.name}</TableCell>
                            <TableCell className="text-slate-600">
                              {getStatusBadge(review.paymentStatus)}
                            </TableCell>
                            <TableCell className="text-slate-600">
                              {new Date(review.createdAt).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "short",
                                day: "numeric"
                              })}
                            </TableCell>
                            <TableCell className="text-right">
                              {getStatusBadge(review.status)}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
