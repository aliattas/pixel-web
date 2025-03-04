import "./styles/hero.css"
import CustomAccordion from "../components/accodion"
import Box from "./box"
import ImageGallery from "./ImageGallery"

const Hero = () => {
  const imageList = [
    "../../images/imgshow1.jpg",
    "../../images/imgshow3.jpg",
    "../../images/imgshow4.jpg",
    "../../images/imgshow5.jpg",
    "../../images/imgshow6.jpg",
    "../../images/imgshow1.jpg",
    "../../images/imgshow8.jpg",
    "../../images/imgshow9.jpg",
  ];
  
  
  return (
    <>      <section className="servise">
                    <div className="service-col2">
              <CustomAccordion />
          </div>
          <div className="service-col1">
              <h2 className="box">خدماتنا</h2>
              <div className="text-box">
                  <span>انت تصنع الذكرى</span>
                  <span>نحن نقوم بكل شيء اخر</span>
              </div>
              <img src="../../images/nice-camera.jpg" alt="" className="img-handler" loading="lazy
              "/>
              <p>نريدك أن تكون قادرًا على وضع كل طاقتك في الجانب الإبداعي في صناعة الصور. لذلك أنشأنا متجرًا شاملاً لكل شيء آخر.</p>
              <div className="button">اقراء اكثر</div>
      </div>
    </section>
      <section >
        <div className="boxs-container">
          <Box
            box={"شبكة البيع بالتجزئة"}
            title={"توزيعات عالمية"}
            text={"احصل على وصول مباشر إلى أكثر من 150 من شركاء التجزئة لدينا في جميع أنحاء العالم."}
            color={"black"}
            textColor="white"
          />
          <Box
            box={"خدمه العملاء"}
            title={"هنا في خدمتك"}
            text={"سواء كنت فنانًا في تعمل على المنتج, أو معجبًا ولديك أسئلة حول طلبك, فريقنا هنا للمساعدة."}
            color={"#e280ff"}
          />
          </div>
      </section>
      <section>
        <div className="join">
          <h2 className="box">المجتمع</h2>
          <h3>انضم إلى مجتمعنا المتكاثر</h3>
          <p>نحن نبني منزلاً للجيل القادم من محبي التصوير ومدمني التسجيل. كن أمام المعجبين ، وتواصل مع الفنانين والعلامات والمتاجر.</p>
          <div className="button">تصفح الفنانين</div>
        </div>
      </section>
      <ImageGallery images={imageList} />;

      <section className="before-end">
        <div className="contain">
          <h2 className="box">استديو بيكسل</h2>
          <h3>اجعلها حقيقية مع أستديو بيكسل </h3>
          <p>صمم شكل ومظهر الفينيل والكاميرات واستخدم حاسبة الربح لترى على الفور تكلفة مشروعك والمبلغ الذي ستكسبه.</p>
          <p className="logo">pixel</p>
          <div className="button">جرب الان</div>
        </div>
      </section>
    </>
   
    
  )
}

export default Hero
