export default function Footer() {
  return (
    <footer className="bg-muted py-12 md:py-16">
      <div className="container-custom">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-bold mb-4">TechFlow</h3>
            <p className="text-sm text-muted-foreground">
              Enterprise-scale software solutions for ambitious companies.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground">
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground">
                  About
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a
                  href="mailto:moustafadabahh@gmail.com"
                  className="hover:text-foreground hover:underline"
                >
                  moustafadabahh@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+201099560690"
                  className="hover:text-foreground hover:underline"
                >
                  +20 109 956 0690
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 TechFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
