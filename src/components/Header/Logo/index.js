import Image from "next/image";
import Link from "next/link";

import ThemeLogo from "../../../../public/img/kkuljaem/LogoEdu.png";

export default function Logo() {
  return (
    <div className="logo">
      <Link
        href="/"
        style={{ fontWeight: 600, color: "#2C2D3F", fontSize: "15px" }}
      >
        <Image src={ThemeLogo} alt="Logo" width={75} height="auto" />
        &nbsp;Kkuljaem Education
      </Link>
    </div>
    // <div className="logo" style={{ display: 'flex', alignItems: 'center' }}>
    //   <Image src={ThemeLogo} alt="Kkuljaem Logo" width={75} height={75} />
    //   <div style={{ marginLeft: '10px', display: 'flex', flexDirection: 'column' }}>
    //     <Link href="/" style={{ fontWeight: 600, color: '#2C2D3F', textDecoration: 'none' }}>
    //       <span style={{ display: 'block' }}>KKULJAEM</span>
    //       <span style={{ display: 'block', marginTop: '-5px' }}>EDUCATION</span>
    //     </Link>
    //   </div>
    // </div>
  );
}
