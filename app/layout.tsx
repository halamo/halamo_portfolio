import "./globals.css";

export const metadata = {
    title: "Resume - Hernan Alamo",
    description: "Hernan Alamo professional resume",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="bg-zinc-50">{children}</body>
        </html>
    );
}
