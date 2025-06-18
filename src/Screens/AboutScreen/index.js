import styles from './AboutScreen.module.css'; 

const AboutScreen = () => {
    return (
        <div className={styles.aboutScreenContainer}>
            <h1 className={styles.aboutTitle}>عن "نمّي مهاراتي"</h1>
            <div className={styles.aboutContent}>
                <p>
                    مرحباً بكم في "نمّي مهاراتي"، منصتكم الشاملة لألعاب الأطفال التعليمية والترفيهية.
                    نحن نؤمن بأن اللعب ليس مجرد وسيلة للتسلية، بل هو الركيزة الأساسية لنمو الطفل وتطوره.
                    من خلال مجموعتنا المنتقاة بعناية من الألعاب، نسعى لتوفير بيئة محفزة تساعد أطفالكم على
                    استكشاف مواهبهم، تنمية مهاراتهم الإدراكية والحركية والاجتماعية، وتغذية فضولهم الطبيعي.
                </p>
                <p>
                    في "نمّي مهاراتي"، كل لعبة يتم اختيارها بمعايير صارمة تضمن الجودة والسلامة والمتعة والفائدة التعليمية.
                    سواء كنتم تبحثون عن ألعاب لتنمية التركيز، أو لتعزيز الإبداع، أو لتشجيع اللعب الجماعي،
                    ستجدون لدينا ما يناسب جميع الأعمار والميول.
                </p>
                <p>
                    هدفنا هو دعم رحلة نمو أطفالكم بكل مرح وثقة، وتقديم منتجات لا تقتصر على المتعة فحسب، بل تترك أثراً إيجابياً ودائماً في شخصياتهم وقدراتهم.
                    انضموا إلينا في هذه الرحلة الممتعة نحو مستقبل مشرق لأطفالنا.
                </p>
                <div className={styles.contactInfo}>
                    <h2>تواصلوا معنا</h2>
                    <p>إذا كان لديكم أي استفسارات أو اقتراحات، لا تترددوا في التواصل معنا:</p>
                    <ul>
                        <li><span className={styles.icon}>✉️</span> البريد الإلكتروني: <a href="mailto:info@nammi-maharati.com" className={styles.contactLink}>info@nammi-maharati.com</a></li>
                        <li><span className={styles.icon}>📞</span> الهاتف: <a href="tel:+201234567890" className={styles.contactLink}>+20 123 456 7890</a></li>
                        <li><span className={styles.icon}>📍</span> العنوان: القاهرة، مصر</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutScreen;