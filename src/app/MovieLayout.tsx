import RootLayout from "./layout";

function MovieLayout({ children }: {
    children: React.ReactNode;
  }) {
  return (
    <RootLayout>
      {children}
    </RootLayout>
  );
};

export default MovieLayout;
