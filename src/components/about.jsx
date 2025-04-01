import "../components/styles/about.css"
import Box from "./Box"
const About = () => {
    return (
      <>
    <div className="about">
          <section className="img-about">
              <img className="img-handler img-one" src="../../images/img1.jpg" alt="someting good" />
              <img className="img-handler img-tow" src="../../images/img2.jpg" alt="nice"  />
          </section>
          <section className="text-about arabic-text">
              <h1 className="box">لما بيكسل</h1>
              <h2 >التصوير بين يديك <span>بدون اي قيود</span></h2>
              <p className="text">إنتاج متكامل للخدمات، شبكة توزيع عالمية، دعم متواصل – واحتفظ بما يصل إلى 85٪ من الأرباح.</p>
          </section>
   </div>
       <div className="content arabic-text">
                <h2>حدد زاويتك وأسلوبك المثالي من عدة خيارات احترافية.</h2>
                <div className="boxs-container">
                    <Box
                        box={"اقراص ضوئيه"}
                        title={"كاميرا"}
                        text={"لطالما كانت الكاميرات مميزة لعشاق التصوير والفنانين. سواء كنت توثق لحظة رائعة في حفل مميز، أو تحافظ على أولى تجاربك التصويرية، لا توجد طريقة أفضل للاحتفاظ بهذه اللحظات الثمينة من خلال عدسة الكاميرا."}
                        src={"../../images/image.png"}
                        color={"#497775"}

                />
                <Box box={"افلام مصوره"}
                        title={"شريط"}
                        text={"نحن نعلم مدى خصوصية الصور الملتقطة بالنسبة لك. تم تصميم منتجاتنا للمصورين، من قبل عشاق التصوير. نجعل من السهل على الفنانين حفظ أعمالهم على الأفلام الفوتوغرافية، بحيث تستمر اللحظات التي تحبها في الظهور بأجمل طريقة."}
                        src={"../../images/nagtive-img.png"}
                        color={"#81836c"}

                />
                </div>
                <div className="content-bottom">
                    <h1>اختار الانسب لك </h1>
                    <p>اختر أفضل نوع مشروع بيكسل ليناسب احتياجاتك ↓</p>
                </div>
                <div className="boxs-container">
                    <Box
                        box={"الطلب المسبق"}
                        title={"احصل عليه"}
                        text={"ضع صورك في حالة جسدية, عاجلاً. احصل على الطلبات المسبقة من المعجبين وسنتولى الباقي."}
                        button={"اقراء اكثر"}
                        color={"#fff804"}
                        src={"../../images/cut-camera.png"}
                    />
                    <Box
                        box={"بدون مخاطرة او خسارة"}
                        title={"التمويل الجماعي"}
                        color={"#497775"}
                        text={"احشد معجبيك واجمع التعهدات. اختر العدد الذي تريده للسجلات التي تحتاجها, دون الحاجة إلى دفع أي شيء مقدمًا."}
                        button={"اقرأ اكثر"}
                        src={"../../images/cutcamera3.png"}
                    />
                </div>
                <div className="end-content">
                    <p>تبحث عن حفظ أعمالك على شرائط  او المزيد من نسخ أشرطة التصوير نحن نفعل ذلك أيضًا. أخبرنا بالمكان وسنقوم بشحنها بكميات كبيرة إلى أي مكان تريده </p>
                    <p><a href="#">أبداء مشروعك التصويري الان</a></p>
                </div>
                </div>
      </>
  )
}

export default About

