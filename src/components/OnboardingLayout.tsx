import Header from "./Header";
import Footer from "./Footer";
import SidebarNav, { NavItem } from "./SidebarNav";

interface OnboardingLayoutProps {
  children: React.ReactNode;
  sidebarItems: NavItem[];
  sidebarTitle: string;
  headerSubtitle?: string;
}

export default function OnboardingLayout({
  children,
  sidebarItems,
  sidebarTitle,
  headerSubtitle,
}: OnboardingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header subtitle={headerSubtitle ?? sidebarTitle} />
      <div className="mx-auto flex w-full max-w-7xl flex-1 gap-8 px-4 py-8 sm:px-6">
        <aside className="w-full shrink-0 lg:w-64">
          <div className="lg:sticky lg:top-24">
            <SidebarNav items={sidebarItems} title={sidebarTitle} />
          </div>
        </aside>
        <main className="min-w-0 flex-1">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
