// import CONFIG from "web.config";
import MasterPageBasic from "components/website/master/MasterPageBasic";
// import BasicLayout from "components/diginext/layout/BasicLayout";
// import { useRouter } from "next/router";
import Header from "components/website/header/Header";
import FooterCustom from "components/website/footer/FooterCustom";
import Container from "components/website/elements/Container";
import BannerTopStyle2 from "components/website/banner/BannerTopStyle2";
import TitleCopy from "components/website/title/TitleCopy";
import Loading from "components/website/loading/Loading";
import {useState, useEffect} from "react";

const fetchData = [
  {
      title: "Liên hệ",
      srcImg: "/images/demo/banner-top-style-2.jpg",
      description: "Mái che  di động, nắng mưa nay đã không còn là nỗi lo."
  }
]

export default function Home(props) {
  // const router = useRouter();
  const [statusLoading, setStatusLoading] = useState(true);

  useEffect(()=>{
    if(fetchData){
      setTimeout(()=>{
        setStatusLoading(false)
      }, 300);
    }
  },[fetchData]);

  return (
    <MasterPageBasic hidePrevButton pageName="Liên hệ">
      <Header active="lien-he"></Header>
      <main id="pContact">
        <BannerTopStyle2 data={fetchData}></BannerTopStyle2>
        <Container className="listContact">
          <TitleCopy
              name={"Sản xuất mái hiên - mái xếp Hoàng Thiên Phát"}
              positionLine={"LEFT"}
              className="noneLine"
            >
              <p>Chất lượng đến từng chi tiết. Giá cả cạnh tranh</p>
              <p>Phone: 0123.456.789</p>
              <p>Email: info@gmail.com</p>
              <p>Địa chỉ: 30 Cách Mạng Tháng 8, Phường 6, quận Bình Thạnh. TP HCM</p>
              <p>Website: hoangthienphat.com | hoangthienphat.net</p>

            </TitleCopy>
        </Container>
        <Container>
         
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.1363706930456!2d106.74748661466907!3d10.877230860299559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d874f6c8146b%3A0x9cb0c9b0486d3b99!2zMTQgS2h1IFBo4buRIE5o4buLIMSQ4buTbmcsIETEqSBBbiwgQsOsbmggRMawxqFuZywgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1614439449712!5m2!1svi!2s" 
            height="450"
            width="100%"
            frameBorder="0"
            aria-hidden="false"
            tabIndex={0}
            loading="lazy">
          </iframe>
        </Container>
      </main>

      <FooterCustom></FooterCustom>
      <Loading status={statusLoading}></Loading>
    </MasterPageBasic>
  );
}
