import React from 'react'

import China from './img/flags/019-china.svg'
import Lithuania from './img/flags/109-lithuania.svg'
import Luxembourg from './img/flags/108-luxembourg.svg'
import Netherlands from './img/flags/105-netherlands.svg'
import Canada from './img/flags/103-canada.svg'
import Thailand from './img/flags/099-thailand.svg'
import Chile from './img/flags/096-chile.svg'
import CzechRepublic from './img/flags/095-czech-republic.svg'
import Belgium from './img/flags/089-belgium.svg'
import Romania from './img/flags/084-romania.svg'
import Qatar from './img/flags/083-qatar.svg'
import Russia from './img/flags/080-russia.svg'
import Uae from './img/flags/079-united-arab-emirates.svg'
import Switzerland from './img/flags/074-switzerland.svg'
import Japan from './img/flags/072-japan.svg'
import Usa from './img/flags/070-united-states-of-america.svg'
import France from './img/flags/065-france.svg'
import Vietnam from './img/flags/061-vietnam.svg'
import Denmark from './img/flags/060-denmark.svg'
import Austria from './img/flags/059-austria.svg'
import Egypt from './img/flags/056-egypt.svg'
import Italy from './img/flags/055-italy.svg'
import Uk from './img/flags/051-united-kingdom.svg'
import Bahrain from './img/flags/047-bahrain.svg'
import Finland from './img/flags/021-finland.svg'
import Algeria from './img/flags/020-algeria.svg'
import Sweden from './img/flags/018-sweden.svg'
import Spain from './img/flags/017-spain.svg'
import Australia from './img/flags/015-australia.svg'
import Estonia from './img/flags/012-estonia.svg'
import Palestine from './img/flags/007-palestine.svg'
import Ireland from './img/flags/002-ireland.svg'
import Poland from './img/flags/042-poland.svg'
import Pakistan from './img/flags/028-pakistan.svg'
import Norway from './img/flags/046-norway.svg'
import Nigeria from './img/flags/030-nigeria-1.svg'
import India from './img/flags/077-india.svg'
import Islands from './img/flags/029-faroe-islands.svg'
import Hungary from './img/flags/093-hungary.svg'
import Greece from './img/flags/078-greece.svg'
import Georgia from './img/flags/025-georgia.svg'
import Germany from './img/flags/048-germany.svg'
import Argentina from './img/flags/034-argentina.svg'
import Ukraine from './img/flags/057-ukraine.svg'
import World from './img/flags/042-worldwide.svg'
import Senegal from './img/flags/001-senegal.svg'
import Brazil from './img/flags/002-brazil.svg'
import Nepal from './img/flags/003-nepal.svg'
import Mexico from './img/flags/004-mexico.svg'
import Srilanka from './img/flags/005-sri-lanka.svg'
import Liechtenstein from './img/flags/006-liechtenstein.svg'
import Sanmarino from './img/flags/007-san-marino.svg'
import Bhutan from './img/flags/008-bhutan.svg'
import Portugal from './img/flags/009-portugal.svg'
import Macao from './img/flags/010-macao.svg'
import Singapore from './img/flags/011-singapore.svg'
import Croatia from './img/flags/012-croatia.svg'
import Cambodia from './img/flags/013-cambodia.svg'
import Azerbaijan from './img/flags/014-azerbaijan.svg'
import Afghanistan from './img/flags/015-afghanistan.svg'
import Armenia from './img/flags/016-armenia.svg'
import BosniaHerzegovina from './img/flags/017-bosnia-and-herzegovina.svg'
import Belarus from './img/flags/018-belarus.svg'
import Andorra from './img/flags/019-andorra.svg'
import Taiwan from './img/flags/020-taiwan.svg'
import Indonesia from './img/flags/021-indonesia.svg'
import Philippines from './img/flags/022-philippines.svg'
import Southafrica from './img/flags/023-south-africa.svg'
import Hongkong from './img/flags/024-hong-kong.svg'
import Iran from './img/flags/025-iran.svg'
import Israel from './img/flags/026-israel.svg'
import Saudi from './img/flags/027-saudi.svg'
import Malaysia from './img/flags/028-malaysia.svg'
import Southkorea from './img/flags/029-south-korea.svg'
import Ecuador from './img/flags/030-ecuador.svg'
import Newzealand from './img/flags/031-new-zealand.svg'
import Slovenia from './img/flags/032-slovenia.svg'
import Monaco from './img/flags/033-monaco.svg'
import Jordan from './img/flags/034-jordan.svg'
import Latvia from './img/flags/035-latvia.svg'
import Dominicanrepublic from './img/flags/036-dominican-republic.svg'
import Tunisia from './img/flags/037-tunisia.svg'
import Lebanon from './img/flags/038-lebanon.svg'
import Iraq from './img/flags/039-iraq.svg'
import Oman from './img/flags/040-oman.svg'
import Republicmacedonia from './img/flags/041-republic-of-macedonia.svg'
import Morocco from './img/flags/043-morocco.svg'
import Vatican from './img/flags/003-vatican.svg'
import Serbia from './img/flags/serbia.svg'
import Cameroon from './img/flags/002-cameroon.svg'
import kuwait from './img/flags/001-kuwait.svg'
import CostaRica from './img/flags/001-costa-rica.svg'
import Peru from './img/flags/002-peru.svg'
import FrenchGuiana from './img/flags/003-french-guiana.svg'
import Bulgaria from './img/flags/004-bulgaria.svg'
import Bangladesh from './img/flags/005-bangladesh.svg'
import Malta from './img/flags/006-malta.svg'
import Slovakia from './img/flags/007-slovakia.svg'
import Martinique from './img/flags/008-martinique.svg'
import Colombia from './img/flags/009-colombia.svg'
import Faroe from './img/flags/010-faroe-islands.svg'
import Moldova from './img/flags/011-moldova.svg'
import Paraguay from './img/flags/012-paraguay.svg'
import Togo from './img/flags/013-togo.svg'
import Albania from './img/flags/albania.svg'

import Panama from './img/flags/001-panama.svg'
import Brunei from './img/flags/002-brunei.svg'
import Cyprus from './img/flags/003-cyprus.svg'
import Cuba from './img/flags/004-cuba.svg'
import Bolivia from './img/flags/005-bolivia.svg'
import BurkinaFaso from './img/flags/006-burkina-faso.svg'
import Honduras from './img/flags/007-honduras.svg'
import Jamaica from './img/flags/008-jamaica.svg'
import Guyana from './img/flags/009-guyana-2.svg'
import IvoryCoast from './img/flags/010-ivory-coast.svg'
import DRC from './img/flags/014-republic-of-the-congo.svg'
import FrenchPolynesia from './img/flags/011-french-polynesia.svg'
import Mongolia from './img/flags/012-mongolia.svg'
import Turkey from './img/flags/013-turkey.svg'

const Flags = (props) => {
    let flag = ""
    switch (props.name) {
        case 'بناما':
            flag = (< img src={Panama}
                alt="flag" />)
        break;
        case 'بروناي':
            flag = (< img src={Brunei}
                alt="flag" />)
        break;
        case 'قبرص':
            flag = (< img src={Cyprus}
                alt="flag" />)
        break;
        case 'كوبا':
            flag = (< img src={Cuba}
                alt="flag" />)
        break;
        case 'بوليفيا':
            flag = (< img src={Bolivia}
                alt="flag" />)
        break;
        case 'بوركينا فاسو':
            flag = (< img src={BurkinaFaso}
                alt="flag" />)
        break;
        case 'هندوراس':
            flag = (< img src={Honduras}
                alt="flag" />)
        break;
        case 'جامايكا':
            flag = (< img src={Jamaica}
                alt="flag" />)
        break;
        case 'غيانا':
            flag = (< img src={Guyana}
                alt="flag" />)
        break;
        case 'ساحل العاج':
            flag = (< img src={IvoryCoast}
                alt="flag" />)
        break;
        case 'جمهورية الكونغو الديموقراطية':
            flag = (< img src={DRC}
                alt="flag" />)
        break;
        case 'بولينيزيا الفرنسية':
            flag = (< img src={FrenchPolynesia}
                alt="flag" />)
        break;
        case 'منغوليا':
            flag = (< img src={Mongolia}
                alt="flag" />)
        break;
        case 'تركيا':
            flag = (< img src={Turkey}
                alt="flag" />)
        break;
        case 'ألبانيا':
            flag = (< img src={Albania}
                alt="flag" />)
        break;
        case 'كوستاريكا':
            flag = (< img src={CostaRica}
                alt="flag" />)
        break;
        case 'بيرو':
            flag = (< img src={Peru}
                alt="flag" />)
        break;
        case 'غيانا الفرنسية':
            flag = (< img src={FrenchGuiana}
                alt="flag" />)
        break;
        case 'بلغاريا':
            flag = (< img src={Bulgaria}
                alt="flag" />)
        break;
        case 'بنغلاديش':
            flag = (< img src={Bangladesh}
                alt="flag" />)
        break;
        case 'مالطا':
            flag = (< img src={Malta}
                alt="flag" />)
        break;
        case 'سلوفاكيا':
            flag = (< img src={Slovakia}
                alt="flag" />)
        break;
        case 'مارتينيك':
            flag = (< img src={Martinique}
                alt="flag" />)
        break;
        case 'كولومبيا':
            flag = (< img src={Colombia}
                alt="flag" />)
        break;
        case 'جزر فارو':
            flag = (< img src={Faroe}
                alt="flag" />)
        break;
        case 'مولدوفا':
            flag = (< img src={Moldova}
                alt="flag" />)
        break;
        case 'باراغواي':
            flag = (< img src={Paraguay}
                alt="flag" />)
        break;
        case 'توغو':
            flag = (< img src={Togo}
                alt="flag" />)
        break;
        case 'صربيا':
            flag = (< img src={Serbia}
                alt="flag" />)
        break;
        case 'مدينة الفاتيكان':
            flag = (< img src={Vatican}
                alt="flag" />)
            break;
        case 'الكاميرون':
            flag = (< img src={Cameroon}
                alt="flag" />)
            break;
        case 'الكويت':
            flag = (< img src={kuwait}
                alt="flag" />)
            break;
        case 'الصين':
            flag = (< img src={China}
                alt="flag" />)
            break;
        case 'هونغ كونغ':
            flag = (< img src={Hongkong}
                alt="flag" />)
            break;
        case 'ماكاو':
            flag = (< img src={Macao}
                alt="flag" />)
            break;
        case 'تايوان':
            flag = (< img src={Taiwan}
                alt="flag" />)
            break;
        case 'أفغانستان':
            flag = (< img src={Afghanistan}
                alt="flag" />)
            break;
        case 'الجزائر':
            flag = (< img src={Algeria}
                alt="flag" />)
            break;
        case 'أندورا':
            flag = (< img src={Andorra}
                alt="flag" />)
            break;
        case 'الأرجنتين':
            flag = (< img src={Argentina}
                alt="flag" />)
            break;
        case 'أرمينيا':
            flag = (< img src={Armenia}
                alt="flag" />)
            break;
        case 'أستراليا':
            flag = (< img src={Australia}
                alt="flag" />)
            break;
        case 'النمسا':
            flag = (< img src={Austria}
                alt="flag" />)
            break;
        case 'أذربيجان':
            flag = (< img src={Azerbaijan}
                alt="flag" />)
            break;
        case 'البحرين':
            flag = (< img src={Bahrain}
                alt="flag" />)
            break;
        case 'روسيا البيضاء':
            flag = (< img src={Belarus}
                alt="flag" />)
            break;
        case 'بلجيكا':
            flag = (< img src={Belgium}
                alt="flag" />)
            break;
        case 'بوتان':
            flag = (< img src={Bhutan}
                alt="flag" />)
            break;
        case 'البوسنة والهرسك':
            flag = (< img src={BosniaHerzegovina}
                alt="flag" />)
            break;
        case 'البرازيل':
            flag = (< img src={Brazil}
                alt="flag" />)
            break;
        case 'كمبوديا':
            flag = (< img src={Cambodia}
                alt="flag" />)
            break;
        case 'كندا':
            flag = (< img src={Canada}
                alt="flag" />)
            break;
        case 'تشيلي':
            flag = (< img src={Chile}
                alt="flag" />)
            break;
        case 'كرواتيا':
            flag = (< img src={Croatia}
                alt="flag" />)
            break;
        case 'التشيك':
            flag = (< img src={CzechRepublic}
                alt="flag" />)
            break;
        case 'الدنمارك':
            flag = (< img src={Denmark}
                alt="flag" />)
            break;
        case 'جمهورية الدومينيكان':
            flag = (< img src={Dominicanrepublic}
                alt="flag" />)
            break;
        case 'الإكوادور':
            flag = (< img src={Ecuador}
                alt="flag" />)
            break;
        case 'مصر':
            flag = (< img src={Egypt}
                alt="flag" />)
            break;
        case 'استونيا':
            flag = (< img src={Estonia}
                alt="flag" />)
            break;
        case 'فنلندا':
            flag = (< img src={Finland}
                alt="flag" />)
            break;
        case 'فرنسا':
            flag = (< img src={France}
                alt="flag" />)
            break;
        case 'ألمانيا':
            flag = (< img src={Germany}
                alt="flag" />)
            break;
        case 'جورجيا':
            flag = (< img src={Georgia}
                alt="flag" />)
            break;
        case 'جبل طارق *':
            flag = (< img src={World}
                alt="flag" />)
            break;
        case 'اليونان':
            flag = (< img src={Greece}
                alt="flag" />)
            break;
        case 'هنغاريا':
            flag = (< img src={Hungary}
                alt="flag" />)
            break;
        case 'أيسلندا':
            flag = (< img src={Islands}
                alt="flag" />)
            break;
        case 'الهند':
            flag = (< img src={India}
                alt="flag" />)
            break;
        case 'أندونيسيا':
            flag = (< img src={Indonesia}
                alt="flag" />)
            break;
        case 'العراق':
            flag = (< img src={Iraq}
                alt="flag" />)
            break;
        case 'إيران':
            flag = (< img src={Iran}
                alt="flag" />)
            break;
        case 'أيرلندا':
            flag = (< img src={Ireland}
                alt="flag" />)
            break;
        case 'إسرائيل':
            flag = (< img src={Israel}
                alt="flag" />)
            break;
        case 'إيطاليا':
            flag = (< img src={Italy}
                alt="flag" />)
            break;
        case 'اليابان':
            flag = (< img src={Japan}
                alt="flag" />)
            break;
        case 'الماس الأميرة':
            flag = (< img src={World}
                alt="flag" />)
            break;
        case 'الأردن':
            flag = (< img src={Jordan}
                alt="flag" />)
            break;
        case 'لاتفيا':
            flag = (< img src={Latvia}
                alt="flag" />)
            break;
        case 'لبنان':
            flag = (< img src={Lebanon}
                alt="flag" />)
            break;
        case 'ليختنشتاين':
            flag = (< img src={Liechtenstein}
                alt="flag" />)
            break;
        case 'ليتوانيا':
            flag = (< img src={Lithuania}
                alt="flag" />)
            break;
        case 'لوكسمبورغ':
            flag = (< img src={Luxembourg}
                alt="flag" />)
            break;
        case 'ماليزيا':
            flag = (< img src={Malaysia}
                alt="flag" />)
            break;
        case 'المكسيك':
            flag = (< img src={Mexico}
                alt="flag" />)
            break;
        case 'موناكو':
            flag = (< img src={Monaco}
                alt="flag" />)
            break;
        case 'المغرب':
            flag = (< img src={Morocco}
                alt="flag" />)
            break;
        case 'نيبال':
            flag = (< img src={Nepal}
                alt="flag" />)
            break;
        case 'هولندا':
            flag = (< img src={Netherlands}
                alt="flag" />)
            break;
        case 'نيوزيلاندا':
            flag = (< img src={Newzealand}
                alt="flag" />)
            break;
        case 'نيجيريا':
            flag = (< img src={Nigeria}
                alt="flag" />)
            break;
        case 'شمال مقدونيا':
            flag = (< img src={Republicmacedonia}
                alt="flag" />)
            break;
        case 'النرويج':
            flag = (< img src={Norway}
                alt="flag" />)
            break;
        case 'فلسطين':
            flag = (< img src={Palestine}
                alt="flag" />)
            break;
        case 'عمان':
            flag = (< img src={Oman}
                alt="flag" />)
            break;
        case 'باكستان':
            flag = (< img src={Pakistan}
                alt="flag" />)
            break;
        case 'الفلبين':
            flag = (< img src={Philippines}
                alt="flag" />)
            break;
        case 'بولندا':
            flag = (< img src={Poland}
                alt="flag" />)
            break;
        case 'البرتغال':
            flag = (< img src={Portugal}
                alt="flag" />)
            break;
        case 'قطر':
            flag = (< img src={Qatar}
                alt="flag" />)
            break;
        case 'رومانيا':
            flag = (< img src={Romania}
                alt="flag" />)
            break;
        case 'روسيا':
            flag = (< img src={Russia}
                alt="flag" />)
            break;
        case 'سان مارينو':
            flag = (< img src={Sanmarino}
                alt="flag" />)
            break;
        case 'السعودية':
            flag = (< img src={Saudi}
                alt="flag" />)
            break;
        case 'السنغال':
            flag = (< img src={Senegal}
                alt="flag" />)
            break;
        case 'سنغافورة':
            flag = (< img src={Singapore}
                alt="flag" />)
            break;
        case 'سلوفينيا':
            flag = (< img src={Slovenia}
                alt="flag" />)
            break;
        case 'جنوب أفريقيا':
            flag = (< img src={Southafrica}
                alt="flag" />)
            break;
        case 'كوريا الجنوبية':
            flag = (< img src={Southkorea}
                alt="flag" />)
            break;
        case 'إسبانيا':
            flag = (< img src={Spain}
                alt="flag" />)
            break;
        case 'سيريلانكا':
            flag = (< img src={Srilanka}
                alt="flag" />)
            break;
        case 'السويد':
            flag = (< img src={Sweden}
                alt="flag" />)
            break;
        case 'سويسرا':
            flag = (< img src={Switzerland}
                alt="flag" />)
            break;
        case 'تايلاند':
            flag = (< img src={Thailand}
                alt="flag" />)
            break;
        case 'تونس':
            flag = (< img src={Tunisia}
                alt="flag" />)
            break;
        case 'أوكرانيا':
            flag = (< img src={Ukraine}
                alt="flag" />)
            break;
        case 'الإمارات':
            flag = (< img src={Uae}
                alt="flag" />)
            break;
        case 'المملكة المتحدة':
            flag = (< img src={Uk}
                alt="flag" />)
            break;
        case 'أمريكا':
            flag = (< img src={Usa}
                alt="flag" />)
            break;
        case 'فيتنام':
            flag = (< img src={Vietnam}
                alt="flag" />)
            break;
        default:
            flag = (< img src={World}
                alt="flag" />)
            break;
    }

    return flag
}

export default Flags