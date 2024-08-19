import Image from "next/image";
import Link from "next/link";

// Theme Logo
import ThemeLogo from "../../../../public/img/kkuljaem/LogoEdu.png";

export default function Logo() {
  return (
    <>
      <div className="logo">
        <Link href="/" style={{ fontWeight: 600, color: "#2C2D3F" }}>
          <Image src={ThemeLogo} alt="#" width={75} height={75} />
          Kkuljaem Education
        </Link>
      </div>
    </>
  );
}
