import { Navbar, NavbarBrand, Link } from "@nextui-org/react";

export default function NavbarComponent({ title }) {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <Navbar className="flex justify-start">
      {title === "Landing Page" ? (
        <NavbarBrand>
          <Link color="foreground" href="#" onClick={scrollTop}>
            <p
              className="ml-10 mt-5 font-bold text-2xl"
              style={{ color: "#0997B0" }}
            >
              <span className="font-semibold">Pest </span>
              <span className="font-bold">Doc</span>
              <span className="font-normal">tor </span>
              <span className="font-semibold">AI </span>
            </p>
          </Link>
        </NavbarBrand>
      ) : (
        <NavbarBrand>
          <Link color="foreground" href="#" onClick={scrollTop}>
            <p
              className="ml-10 mt-5 font-bold text-2xl"
              style={{ color: "#000000" }}
            >
              <span className="font-semibold">Pest </span>
              <span className="font-bold">Doc</span>
              <span className="font-normal">tor </span>
              <span className="font-semibold">AI </span>
              <span className="font-light">Help</span>
            </p>
          </Link>
        </NavbarBrand>
      )}
    </Navbar>
  );
}
