import React from "react";

import { Helmet } from "react-helmet";

import "../labpage1.css";
import Accreditation from "../Components/Accrediction";
import KeepExpand from "../Components/KeepExpand";
import Group8 from "../Components/Group8";
import BackGround from "../Components/BackGround";
import ChooseUs from "../Components/ChooseUs";
import FillInform from "../Components/FillInform";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import HeroText from "../Components/HeroText";
import OfferLine from "../Components/OfferLine";

const Labpage1 = (props) => {
  return (
    <div className="labpage1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="labpage1-labpage1">
        {/* <div className="labpage1-bg">
          <img
            src="/external/rectangle1167-0x2s-900h.png"
            alt="Rectangle1167"
            className="labpage1-rectangle1"
          />
          <img
            src="/external/rectangle63168-kya.svg"
            alt="Rectangle63168"
            className="labpage1-rectangle63"
          />
          <span className="labpage1-text">
            <span>NotInLine</span>
          </span>
          <img
            src="/external/rectangle82172-su0l.svg"
            alt="Rectangle82172"
            className="labpage1-rectangle82"
          />
          <img
            src="/external/rectangle22173-g1.svg"
            alt="Rectangle22173"
            className="labpage1-rectangle22"
          />
          <img
            src="/external/expressiveyoungwomanposingstudioremovebgpreviewtra174-8mi4-800h.png"
            alt="expressiveyoungwomanposingstudioremovebgpreviewtra174"
            className="labpage1-expressiveyoungwomanposingstudioremovebgpreviewtra"
          />
        </div> */}
        {/* <div className="labpage1-footer">
          <img
            src="/external/nillogotransparent11177-bg8-200h.png"
            alt="NILlogoTransparent11177"
            className="labpage1-n-llogo-transparent11"
          />
          <span className="labpage1-text002">
            <span>
              Book doctor appointments online and get your ailments treated in
              no time with our expert medical support systems. Get rid of all
              your medical problem with our expert panel of doctors who guide
              you towards a healthier life.
            </span>
          </span>
          <span className="labpage1-text004">
            <span>Appointments</span>
          </span>
          <img
            src="/external/rectangle50180-tfj-200h.png"
            alt="Rectangle50180"
            className="labpage1-rectangle50"
          />
          <img
            src="/external/rectangle51181-6pb.svg"
            alt="Rectangle51181"
            className="labpage1-rectangle51"
          />
          <div className="labpage1-call">
            <img
              src="/external/boundingboxi182-lp3k-200h.png"
              alt="BoundingboxI182"
              className="labpage1-boundingbox"
            />
            <img
              src="/external/calli182-mzmj.svg"
              alt="callI182"
              className="labpage1-call1"
            />
          </div>
          <img
            src="/external/line4183-nous.svg"
            alt="Line4183"
            className="labpage1-line4"
          />
          <span className="labpage1-text006">
            <span>+91</span>
          </span>
          <span className="labpage1-text008">
            <span>Services</span>
          </span>
          <span className="labpage1-text010">
            <span>Lab tests</span>
          </span>
          <span className="labpage1-text012">
            <span>A-Z medicine</span>
          </span>
          <span className="labpage1-text014">
            <span>Doctor support</span>
          </span>
          <span className="labpage1-text016">
            <span>General info</span>
          </span>
          <span className="labpage1-text018">
            <span>Legal</span>
          </span>
          <span className="labpage1-text020">
            <span>Privacy policy</span>
          </span>
          <span className="labpage1-text022">
            <span>Terms of services</span>
          </span>
          <span className="labpage1-text024">
            <span>Consultation</span>
          </span>
          <span className="labpage1-text026">
            <span>How it works</span>
          </span>
          <span className="labpage1-text028">
            <span>support@notinline.com</span>
          </span>
          <span className="labpage1-text030">
            <span>Talk to us</span>
          </span>
          <span className="labpage1-text032">
            <span>appointment@notinline.com</span>
          </span>
          <span className="labpage1-text034">
            <span>+91 12345 67899</span>
          </span>
          <span className="labpage1-text036">
            <span>+91 97642 09752</span>
          </span>
          <span className="labpage1-text038">
            <span>2021-2023 All Rights Reserved</span>
          </span>
          <div className="labpage1-component4">
            <img
              src="/external/ellipse25i110-ddo-200h.png"
              alt="Ellipse25I110"
              className="labpage1-ellipse25"
            />
            <span className="labpage1-text040">C</span>
          </div>
          <img
            src="/external/line51102-gm4i.svg"
            alt="Line51102"
            className="labpage1-line5"
          />
        </div> */}
        {/* <div className="labpage1-herotextimage">
          <div className="labpage1-component1">
            <img
              src="/external/rectangle65i110-3xil-300h.png"
              alt="Rectangle65I110"
              className="labpage1-rectangle65"
            />
            <img
              src="/external/rectangle64i110-nr5i-300h.png"
              alt="Rectangle64I110"
              className="labpage1-rectangle64"
            />
            <img
              src="/external/mediumshotwomanlookingthroughmicroscoperemovebgprei110-v3b-400w.png"
              alt="mediumshotwomanlookingthroughmicroscoperemovebgpreI110"
              className="labpage1-mediumshotwomanlookingthroughmicroscoperemovebgpre"
            />
            <img
              src="/external/rectangle66i110-rhj-400w.png"
              alt="Rectangle66I110"
              className="labpage1-rectangle66"
            />
            <img
              src="/external/rectangle67i110-deyt-300h.png"
              alt="Rectangle67I110"
              className="labpage1-rectangle67"
            />
          </div>
          <div className="labpage1-component7">
            <img
              src="/external/rectangle75i110-gi74-200h.png"
              alt="Rectangle75I110"
              className="labpage1-rectangle75"
            />
            <img
              src="/external/ellipse1i110-v7bb-200h.png"
              alt="Ellipse1I110"
              className="labpage1-ellipse1"
            />
          </div>
          <div className="labpage1-component5">
            <img
              src="/external/rectangle76i110-0qms-200h.png"
              alt="Rectangle76I110"
              className="labpage1-rectangle76"
            />
            <span className="labpage1-text041">
              <span>Complementary report consultation</span>
            </span>
            <img
              src="/external/ellipse2i110-udp-200h.png"
              alt="Ellipse2I110"
              className="labpage1-ellipse2"
            />
          </div>
          <div className="labpage1-component6">
            <img
              src="/external/rectangle68i110-quzn-200h.png"
              alt="Rectangle68I110"
              className="labpage1-rectangle68"
            />
            <img
              src="/external/ellipse3i110-pxal-200h.png"
              alt="Ellipse3I110"
              className="labpage1-ellipse3"
            />
          </div>
          <span className="labpage1-text043">
            <span className="labpage1-text044">Best in class</span>
            <span> lab tests!</span>
          </span>
          <img
            src="/external/vector11109-dkyi.svg"
            alt="Vector11109"
            className="labpage1-vector1"
          />
          <div className="labpage1-accuratetimelyreports">
            <span className="labpage1-text046">
              <span>Accurate timely reports</span>
            </span>
          </div>
          <div className="labpage1-timelysamplecollection">
            <span className="labpage1-text048">
              <span>Timely sample collection</span>
            </span>
          </div>
        </div> */}
        {/* <div className="labpage1-fillinform">
          <img
            src="/external/rectangle701114-cdj-200h.png"
            alt="Rectangle701114"
            className="labpage1-rectangle70"
          />
          <img
            src="/external/rectangle711115-bydc-200h.png"
            alt="Rectangle711115"
            className="labpage1-rectangle71"
          />
          <img
            src="/external/rectangle721116-cqxf-200h.png"
            alt="Rectangle721116"
            className="labpage1-rectangle72"
          />
          <span className="labpage1-text050">
            <span>Full name</span>
          </span>
          <span className="labpage1-text052">
            <span>Phone number</span>
          </span>
          <span className="labpage1-text054">
            <span>Location</span>
          </span>
          <div className="labpage1-person">
            <img
              src="/external/boundingboxi112-rcrk-200h.png"
              alt="BoundingboxI112"
              className="labpage1-boundingbox01"
            />
            <img
              src="/external/personi112-hbcv.svg"
              alt="personI112"
              className="labpage1-person1"
            />
          </div>
          <div className="labpage1-call2">
            <img
              src="/external/boundingboxi112-z1ou-200h.png"
              alt="BoundingboxI112"
              className="labpage1-boundingbox02"
            />
            <img
              src="/external/calli112-jl0g.svg"
              alt="callI112"
              className="labpage1-call3"
            />
          </div>
          <div className="labpage1-distance">
            <img
              src="/external/boundingboxi112-6fe2-200h.png"
              alt="BoundingboxI112"
              className="labpage1-boundingbox03"
            />
            <img
              src="/external/distancei112-nqbd.svg"
              alt="distanceI112"
              className="labpage1-distance1"
            />
          </div>
          <div className="labpage1-component2">
            <img
              src="/external/rectangle73i112-fxso-200h.png"
              alt="Rectangle73I112"
              className="labpage1-rectangle73"
            />
            <div className="labpage1-check">
              <img
                src="/external/checki112-emtc.svg"
                alt="checkI112"
                className="labpage1-check1"
              />
            </div>
          </div>
          <span className="labpage1-text056">
            <span className="labpage1-text057">
              By continuing, you agree to our
            </span>
            <span className="labpage1-text058"> T&amp;C</span>
            <span className="labpage1-text059">
              {" "}
              and
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>privacy policy</span>
          </span>
          <img
            src="/external/rectangle741125-23nd-200h.png"
            alt="Rectangle741125"
            className="labpage1-rectangle74"
          />
          <span className="labpage1-text061">
            <span>Proceed</span>
          </span>
          <span className="labpage1-text063">
            <span>Fill in the details to get a call!</span>
          </span>
        </div> */}
        {/* <div className="labpage1-offerline">
          <img
            src="/external/rectangle1081129-heh-200h.png"
            alt="Rectangle1081129"
            className="labpage1-rectangle108"
          />
          <img
            src="/external/rectangle1061130-18wp-200h.png"
            alt="Rectangle1061130"
            className="labpage1-rectangle106"
          />
          <span className="labpage1-text065">
            <span className="labpage1-text066">Get a Full Body Checkup</span>
            <span className="labpage1-text067">
              {" "}
              Now
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>at</span>
          </span>
          <div className="labpage1-currencyrupee">
            <img
              src="/external/currencyrupee1134-7r6.svg"
              alt="currencyrupee1134"
              className="labpage1-currencyrupee01"
            />
          </div>
          <span className="labpage1-text069">
            <span>5,999</span>
          </span>
          <img
            src="/external/rectangle1071136-qi3h-200h.png"
            alt="Rectangle1071136"
            className="labpage1-rectangle107"
          />
          <div className="labpage1-currencyrupee02">
            <img
              src="/external/currencyrupee1139-f4js.svg"
              alt="currencyrupee1139"
              className="labpage1-currencyrupee03"
            />
          </div>
          <span className="labpage1-text071">
            <span>999</span>
          </span>
          <span className="labpage1-text073">
            <span>70% OFF</span>
          </span>
        </div> */}
        {/* <div className="labpage1-whychooseus">
          <span className="labpage1-text075">
            <span className="labpage1-text076">
              Why
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span className="labpage1-text077">choose</span>
            <span> us?</span>
          </span>
          <span className="labpage1-text079">
            <span>
              We want you and your heart to be healthy so you can live a happy
              life!
            </span>
          </span>
          <img
            src="/external/vector41145-a0cr.svg"
            alt="Vector41145"
            className="labpage1-vector4"
          />
          <img
            src="/external/rectangle241146-13o7-300h.png"
            alt="Rectangle241146"
            className="labpage1-rectangle24"
          />
          <img
            src="/external/rectangle251147-h29-300h.png"
            alt="Rectangle251147"
            className="labpage1-rectangle25"
          />
          <img
            src="/external/rectangle261148-nql-300h.png"
            alt="Rectangle261148"
            className="labpage1-rectangle26"
          />
          <img
            src="/external/rectangle271149-fl6-300h.png"
            alt="Rectangle271149"
            className="labpage1-rectangle27"
          />
          <img
            src="/external/ellipse141150-sev-200h.png"
            alt="Ellipse141150"
            className="labpage1-ellipse14"
          />
          <img
            src="/external/ellipse131151-3l56-200h.png"
            alt="Ellipse131151"
            className="labpage1-ellipse13"
          />
          <img
            src="/external/ellipse151152-oziu-200h.png"
            alt="Ellipse151152"
            className="labpage1-ellipse15"
          />
          <span className="labpage1-text081">
            <span>NABL Accredited Labs</span>
          </span>
          <span className="labpage1-text083">
            <span>Value experience</span>
          </span>
          <span className="labpage1-text085">
            <span>Timely collections</span>
          </span>
          <span className="labpage1-text087">
            <span>Transparency</span>
          </span>
          <img
            src="/external/ellipse161157-e48e-200h.png"
            alt="Ellipse161157"
            className="labpage1-ellipse16"
          />
          <span className="labpage1-text089">
            <span>
              Get accurate and safe results from our NABL-certified lab
              partners.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
          <span className="labpage1-text091">
            <span>
              Experience seamless care without the hassle of waiting in long
              lines for an appointment. Book with us for a healthier lifestyle.
            </span>
          </span>
          <span className="labpage1-text093">
            <span>
              We collect samples timely to prevent treatment delays and ensure
              your continued well-being.
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
          </span>
          <span className="labpage1-text095">
            <span>
              {" "}
              Enjoy hassle free medical assistance with our transparent
              approach. We prioritize transparency for your smooth
              medical journey.
            </span>
          </span>
        </div> */}
        {/* <div className="labpage1-header">
          <div className="labpage1-component10">
            <img
              src="/external/screenshot20230725165513removebgpreview1i116-7rgn-200h.png"
              alt="Screenshot20230725165513removebgpreview1I116"
              className="labpage1-screenshot20230725165513removebgpreview1"
            />
            <img
              src="/external/nillogotransparent11i116-lrbb-200w.png"
              alt="NILlogoTransparent11I116"
              className="labpage1-n-llogo-transparent111"
            />
          </div>
          <div className="labpage1-group1">
            <span className="labpage1-text097">
              <span>Lab tests</span>
            </span>
            <span className="labpage1-text099">
              <span>Home</span>
            </span>
            <span className="labpage1-text101">
              <span>Health conditions</span>
            </span>
            <span className="labpage1-text103">
              <span>Medicines</span>
            </span>
          </div>
          <img
            src="/external/rectangle1261170-ro7g-200h.png"
            alt="Rectangle1261170"
            className="labpage1-rectangle126"
          />
          <img
            src="/external/rectangle1271171-5jn-200h.png"
            alt="Rectangle1271171"
            className="labpage1-rectangle127"
          />
          <div className="labpage1-component11">
            <img
              src="/external/rectangle45i117-7j3h-200h.png"
              alt="Rectangle45I117"
              className="labpage1-rectangle45"
            />
            <span className="labpage1-text105">
              <span>Play store</span>
            </span>
            <img
              src="/external/rectangle48i117-2ck6-200h.png"
              alt="Rectangle48I117"
              className="labpage1-rectangle48"
            />
          </div>
          <span className="labpage1-text107">
            <span>For patients</span>
          </span>
          <span className="labpage1-text109">
            <span>For hospitals</span>
          </span>
        </div> */}
        {/* <div className="labpage1-group8">
          <span className="labpage1-text111">
            <span className="labpage1-text112">
              Top
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span>packages</span>
          </span>
          <img
            src="/external/vector51177-4pf3.svg"
            alt="Vector51177"
            className="labpage1-vector5"
          />
          <span className="labpage1-text114">
            <span>
              Explore our wide range of tests! We ensure that you don’t miss out
              on any chance to keep yourself healthy.
            </span>
          </span>
          <img
            src="/external/rectangle131179-a27r-400h.png"
            alt="Rectangle131179"
            className="labpage1-rectangle13"
          />
          <img
            src="/external/rectangle141180-kgkg-400h.png"
            alt="Rectangle141180"
            className="labpage1-rectangle14"
          />
          <img
            src="/external/rectangle151181-l34v-400h.png"
            alt="Rectangle151181"
            className="labpage1-rectangle15"
          />
          <span className="labpage1-text116">
            <span>Basic Full Body Checkup</span>
          </span>
          <span className="labpage1-text118">
            <span>Number of tests - 53</span>
          </span>
          <span className="labpage1-text120">
            <span>4.3</span>
          </span>
          <span className="labpage1-text122">
            <span>( 75 Reviews )</span>
          </span>
          <span className="labpage1-text124">
            <span>Advance Full Body Checkup</span>
          </span>
          <span className="labpage1-text126">
            <span>Number of tests - 70</span>
          </span>
          <span className="labpage1-text128">
            <span>4.7</span>
          </span>
          <span className="labpage1-text130">
            <span>( 100 Reviews )</span>
          </span>
          <span className="labpage1-text132">
            <span>Liver Function Test (LFT)</span>
          </span>
          <span className="labpage1-text134">
            <span>Number of tests - 89</span>
          </span>
          <span className="labpage1-text136">
            <span>4.3</span>
          </span>
          <span className="labpage1-text138">
            <span>( 43 Reviews )</span>
          </span>
          <img
            src="/external/ellipse121194-cakl-200h.png"
            alt="Ellipse121194"
            className="labpage1-ellipse12"
          />
          <img
            src="/external/arrow11195-mr2h.svg"
            alt="Arrow11195"
            className="labpage1-arrow1"
          />
          <div className="labpage1-grade">
            <img
              src="/external/boundingboxi119-bx1l-200h.png"
              alt="BoundingboxI119"
              className="labpage1-boundingbox04"
            />
            <img
              src="/external/gradei119-o99k.svg"
              alt="gradeI119"
              className="labpage1-grade1"
            />
          </div>
          <div className="labpage1-grade2">
            <img
              src="/external/boundingboxi119-iusf-200h.png"
              alt="BoundingboxI119"
              className="labpage1-boundingbox05"
            />
            <img
              src="/external/gradei119-wgf.svg"
              alt="gradeI119"
              className="labpage1-grade3"
            />
          </div>
          <div className="labpage1-grade4">
            <img
              src="/external/boundingboxi119-mwjh-200h.png"
              alt="BoundingboxI119"
              className="labpage1-boundingbox06"
            />
            <img
              src="/external/gradei119-34b.svg"
              alt="gradeI119"
              className="labpage1-grade5"
            />
          </div>
          <img
            src="/external/rectangle831199-yl4l-200h.png"
            alt="Rectangle831199"
            className="labpage1-rectangle83"
          />
          <span className="labpage1-text140">
            <span>Book now</span>
          </span>
          <img
            src="/external/rectangle831201-bh-200h.png"
            alt="Rectangle831201"
            className="labpage1-rectangle831"
          />
          <span className="labpage1-text142">
            <span>Book now</span>
          </span>
          <img
            src="/external/rectangle841203-7c4s-200h.png"
            alt="Rectangle841203"
            className="labpage1-rectangle84"
          />
          <span className="labpage1-text144">
            <span>Book now</span>
          </span>
          <span className="labpage1-text146">
            <span>10,000</span>
          </span>
          <span className="labpage1-text148">
            <span>8,490</span>
          </span>
          <div className="labpage1-currencyrupee04">
            <img
              src="/external/boundingboxi120-3dvh-200h.png"
              alt="BoundingboxI120"
              className="labpage1-boundingbox07"
            />
            <img
              src="/external/currencyrupeei120-77sj.svg"
              alt="currencyrupeeI120"
              className="labpage1-currencyrupee05"
            />
          </div>
          <span className="labpage1-text150">
            <span>MRP:</span>
          </span>
          <img
            src="/external/rectangle1321209-hmt-200h.png"
            alt="Rectangle1321209"
            className="labpage1-rectangle132"
          />
          <div className="labpage1-currencyrupee06">
            <img
              src="/external/boundingboxi121-2if-200h.png"
              alt="BoundingboxI121"
              className="labpage1-boundingbox08"
            />
            <img
              src="/external/currencyrupeei121-jes.svg"
              alt="currencyrupeeI121"
              className="labpage1-currencyrupee07"
            />
          </div>
          <span className="labpage1-text152">
            <span>12,000</span>
          </span>
          <span className="labpage1-text154">
            <span>10,000</span>
          </span>
          <div className="labpage1-currencyrupee08">
            <img
              src="/external/boundingboxi121-e8yq-200h.png"
              alt="BoundingboxI121"
              className="labpage1-boundingbox09"
            />
            <img
              src="/external/currencyrupeei121-zj7f.svg"
              alt="currencyrupeeI121"
              className="labpage1-currencyrupee09"
            />
          </div>
          <div className="labpage1-currencyrupee10">
            <img
              src="/external/boundingboxi121-ctp-200h.png"
              alt="BoundingboxI121"
              className="labpage1-boundingbox10"
            />
            <img
              src="/external/currencyrupeei121-z7lv.svg"
              alt="currencyrupeeI121"
              className="labpage1-currencyrupee11"
            />
          </div>
          <img
            src="/external/rectangle1331215-pukf-200h.png"
            alt="Rectangle1331215"
            className="labpage1-rectangle133"
          />
          <span className="labpage1-text156">
            <span>MRP:</span>
          </span>
          <span className="labpage1-text158">
            <span>13,299</span>
          </span>
          <span className="labpage1-text160">
            <span>11,299</span>
          </span>
          <div className="labpage1-currencyrupee12">
            <img
              src="/external/boundingboxi121-tui-200h.png"
              alt="BoundingboxI121"
              className="labpage1-boundingbox11"
            />
            <img
              src="/external/currencyrupeei121-ueua.svg"
              alt="currencyrupeeI121"
              className="labpage1-currencyrupee13"
            />
          </div>
          <img
            src="/external/rectangle1341220-tf7p-200h.png"
            alt="Rectangle1341220"
            className="labpage1-rectangle134"
          />
          <div className="labpage1-currencyrupee14">
            <img
              src="/external/boundingboxi122-y26x-200h.png"
              alt="BoundingboxI122"
              className="labpage1-boundingbox12"
            />
            <img
              src="/external/currencyrupeei122-1ai.svg"
              alt="currencyrupeeI122"
              className="labpage1-currencyrupee15"
            />
          </div>
          <span className="labpage1-text162">
            <span>MRP:</span>
          </span>
        </div> */}
        {/* <div className="labpage1-wekeepexpanding">
          <span className="labpage1-text164">
            <span className="labpage1-text165">
              We keep
              <span
                dangerouslySetInnerHTML={{
                  __html: " ",
                }}
              />
            </span>
            <span className="labpage1-text166">expanding!</span>
          </span>
          <img
            src="/external/vector21225-jtpk.svg"
            alt="Vector21225"
            className="labpage1-vector2"
          />
          <div className="labpage1-group7">
            <div className="labpage1-component15">
              <img
                src="/external/rectangle131i122-u61-200h.png"
                alt="Rectangle131I122"
                className="labpage1-rectangle131"
              />
              <span className="labpage1-text167">
                <span>5+</span>
              </span>
              <span className="labpage1-text169">
                <span>Labs</span>
              </span>
            </div>
            <div className="labpage1-component16">
              <img
                src="/external/rectangle131i122-vdr7-200h.png"
                alt="Rectangle131I122"
                className="labpage1-rectangle1311"
              />
            </div>
            <span className="labpage1-text171">
              <span>100+</span>
            </span>
            <span className="labpage1-text173">
              <span>Collection centers</span>
            </span>
            <div className="labpage1-component17">
              <img
                src="/external/rectangle131i123-vvhh-200h.png"
                alt="Rectangle131I123"
                className="labpage1-rectangle1312"
              />
            </div>
            <span className="labpage1-text175">
              <span>1000+</span>
            </span>
            <span className="labpage1-text177">
              <span>Monthly tests</span>
            </span>
            <div className="labpage1-component18">
              <img
                src="/external/rectangle131i123-jqsm-200h.png"
                alt="Rectangle131I123"
                className="labpage1-rectangle1313"
              />
            </div>
            <span className="labpage1-text179">
              <span>2200</span>
            </span>
            <span className="labpage1-text181">
              <span>Test menu</span>
            </span>
            <div className="labpage1-component19">
              <img
                src="/external/rectangle131i123-s6d-200h.png"
                alt="Rectangle131I123"
                className="labpage1-rectangle1314"
              />
            </div>
            <span className="labpage1-text183">
              <span>5+</span>
            </span>
            <span className="labpage1-text185">
              <span>Cities present in</span>
            </span>
          </div>
        </div> */}
        {/* <div className="labpage1-accreditation">
          <img
            src="/external/rectangle811241-j9rt-200w.png"
            alt="Rectangle811241"
            className="labpage1-rectangle81"
          />
          <span className="labpage1-text187">
            <span>Free sample collection</span>
          </span>
          <img
            src="/external/rectangle801243-ui4p-200w.png"
            alt="Rectangle801243"
            className="labpage1-rectangle80"
          />
          <span className="labpage1-text189">
            <span>NABL Accredited Labs</span>
          </span>
        </div> */}
        <BackGround />
        <Footer />
        <HeroText />
        <FillInform />
        <OfferLine />
        <ChooseUs />
        <Header />
        <Group8 />
        <KeepExpand />
        <Accreditation />
      </div>
    </div>
  );
};

export default Labpage1;
