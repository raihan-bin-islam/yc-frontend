import React from "react";

// COMPONENTS
import Button from "../../Shared/Button/Button";

// LAYOUT
import Layout from "../../Shared/CommonSvg/Layout";

// IMAGES
import image1 from "../../../public/assets/images/social_business/issues_image-1.png";
import image2 from "../../../public/assets/images/social_business/issues_image-2.png";
import image3 from "../../../public/assets/images/social_business/issues_image-3.png";

// CSS
import styles from "./SocialBusinessIssuesBody.module.scss";
import { useRouter } from "next/router";

const SocialBusinessIssuesBody = () => {
  const router = useRouter();

  const {
    issuesBody,
    imgContainer,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionOneLeft,
    sectionOneRight,
    sectionTwoLeft,
    sectionTwoRight,
    box,
    subBox,
    boxLeft,
    boxRight,
    subBoxLeft,
    subBoxRight,
    option,
    subOption,
    questionBox,
    questionBox2,
    number,
    text,
    btnBox,
    issuesLayout,
  } = styles;

  return (
    <div className={issuesBody}>
      {/* ------------------- Section 1 --------------------*/}
      <div className={`${sectionOne} container-layout`}>
        <div className={sectionOneLeft}>
          <h1>Some Issues Relating to SOCIAL BUSINESSES</h1>
        </div>
        <div className={sectionOneRight}>
          <div className={imgContainer}>
            <img src={image1.src} alt="image" />
          </div>
        </div>
      </div>
      {/* ------------------- Section 2 --------------------*/}
      <div className={`${sectionTwo} container-layout`}>
        <div className={sectionTwoLeft}>
          <h3>TYPES OF SOCIAL BUSINESS</h3>
          <div className={box}>
            <h4>01. TYPE 01 or classic social business</h4>
            <p>
              A social cause-driven non-dividend company, or any other type of enterprises (such as, co-operative,
              individually or jointly owned business, or any other legal form of business ) devoted to solving social
              problems and does not distribute proﬁt to shareholders except for recouping investment amount, will be
              recognised as a Type 1 social business.
            </p>
          </div>
          <div className={box}>
            <h4>02. TYPE 02 social business</h4>
            <p>
              A proﬁt-distributing corporate body primarily (at least 75% of equity) owned by the poor will be
              categorized as a special kind of social business. We may call it Social business Type 2.
            </p>
            <p>
              Other social businesses of Type 2 category are the business enterprises owned (at least 75% of equity) by
              a social business or by a foundation, or by a Trust, or an NGO, or by any not-for-proﬁt enterprise where
              owner organization (NGO, or foundation, or Trust, or other such entities) takes out proﬁt from their
              businesses only for the exclusive purpose of creating and operating Social Business Fund/s within the
              parent organization. Social Business Fund itself is operated as a social business and follow the seven
              principles of social business.
            </p>
          </div>
        </div>
        <div className={sectionTwoRight}>
          <div className={box}>
            <h4>03. Pre social business</h4>
            <p>
              Can an NGO or a not-for-proﬁt entity be called a social business if it itself operates as a social
              cause-driven business ?
            </p>
          </div>
          <span>Strictly speaking, no.</span>
          <p>
            In order to be a social business, the entity has to be a ‘business’ under any legal form of business, owned
            by one or more individuals, or under co- operative or corporate ownership. It should be registered as a
            business and follow business laws and regulations. NGO or a not-for-proﬁt entity does not satisfy these
            conditions.
          </p>
          <p>
            But in this case, we cannot overlook the fact that this NGO in question is a social business-like entity in
            action and spirit. Only thing missing is its ownership criterion. We may call this NGO a ‘Pre-Social
            Business’. It may become a Type 1 or Type 2 social business by changing its legal status by registering
            itself as a business.
          </p>
          <p>
            It can become Type 1 social business if the NGO itself transforms into a business entity, moving away from
            its NGO legal status.
          </p>
          <p>
            It can become a Type 2 social business if the NGO separates out the commercial part and creates a business
            entity around it, under its ownership. At least 75% of the ownership should be retained by the NGO to
            qualify it as a Type 2 social business. However, the NGO must follow the rules of Type 2 social business by
            creating one or more social business funds with all the proﬁts coming from the business.
          </p>
        </div>
      </div>
      {/* ------------------- Section 3 --------------------*/}
      <div className={`${sectionThree} container-layout`}>
        <h3>What Role Governments Can Play in Promoting Social Business</h3>
        <p>
          Can Create an Unambiguous Legal Identity Most important thing for governments to do is to deﬁne social
          business in its laws and regulations to give it a clear identity. Unless a government adopts a clear
          unambiguous deﬁnition before it starts promoting and operating social business it will be totally counter-
          productive. It will close the door for social business for ever. It should be deﬁned in the following way:
        </p>
        <p>
          “Social business is a social cause-driven enterprise aiming at solving any type of social and economic
          problem, such as, poverty, unemployment, healthcare, education, nutrition, housing, ﬁnancial services,
          entrepreneurship for the poor, environment, homelessness, old age, technology, green energy, etc, and it does
          not distribute any proﬁt to its shareholder/s orowner/s, except for recouping their investment amount.”
        </p>
        <p>
          Law should require social business companies, and enterprises to incorporate the social objectives in its
          Memorandum of Association and Articles in an appropriate manner following the legal deﬁnition. A social
          business company should also include the following in its Memorandum of Association and Articles.
        </p>
        <p>
          “The company owners will not receive any personal proﬁt beyond recouping their respective investments. After
          that all proﬁts will be ploughed back into the enterprise. The enterprise will use the money for expansion of
          the business and/or invest in new social businesses, and/or create social business fund/s.”
        </p>
        <p>
          Also government will make it mandatory to include seven principles of social business in the Memorandum of
          Association and Articles as company’s core operational principles.
        </p>

        <div className={box}>
          <div className={boxLeft}>
            <h4>Government May Become A Facilitator And A Promoter Of Social Business</h4>
            <div className={subBoxLeft}>
              <div>
                <p>
                  Government can give priorities to Social Business in its regular activities; give priority to social
                  businesses in selecting applicant enterprises for licenses, rights, and privileges, and for any type
                  of business contracts for construction, purchase or supplies, etc.
                </p>
                <p>When giving any type of commercial licenses government can offer licenses</p>
                <span className={option}>{`a) Exclusively to social businesses`}</span>
                <span className={option}>{`b) Give preferences to`}</span>
                <span className={subOption}>{`i. Social businesses.`}</span>
                <span className={subOption}>{`ii. An applicant who owns a social business wholly or partially.`}</span>
              </div>
            </div>
          </div>
          <div className={boxRight}>
            <h4>Why Give Priority</h4>
            <div className={subBoxRight}>
              <p>
                Government is responsible for enhancing the wellbeing of the people. By prioritizing social business as
                a matter of policy, people beneﬁt in many ways, most important beneﬁt being the fact that the proﬁt
                accruing to social business does not contribute to wealth concentration.
              </p>
              <p>
                In addition, since social businesses are dedicated to solving social problems it helps achieve the goals
                of government directly.
              </p>
              <p>
                Social businesses are sustainable, create a self expanding system. Out of proﬁt of the social business,
                business itself can be expanded or more social businesses may be created.
              </p>
            </div>
          </div>
        </div>
        <div className={questionBox}>
          <h4>Beside Giving Priorities What Else Government Can Do?</h4>
          <div className={box}>
            <div className={boxLeft}>
              <p>
                Another important thing that a government can do is to create directly or indirectly Social Business
                Funds, Social Business Venture Capital Funds, Social Business Insurance Companies, etc, to facilitate in
                setting up of social businesses, and promoting entrepreneurship among the unemployed youth.
              </p>
              <p>
                Government can create these funds and operate as government entities or inspire and encourage private
                and charity sectors to create similar entities. These funds must be designed as social business
                themselves.
              </p>
              <p>
                Government can encourage creation of these funds at all levels of government, such as, city, province,
                and federal. Government can develop dedicated management teams to manage these funds.
              </p>
              <p>
                Government can create these funds specially for backward regions and encourage the businesses which
                operate in those areas to create social businesses taking advantage of these funds to beneﬁt the local
                economy and the local people.
              </p>
              <p>
                Government can encourage creation of Social Business cities, villages, and provinces to solve social
                problems within the boundaries of these administrative /political units.
              </p>
              <p>
                Government can encourage setting up of specialized audit ﬁrms to audit social businesses every year to
                report to the regulators whether they are actually are following the principles of social business.
                Audit ﬁrms can be encouraged to assess the effectiveness of the social businesses and offer suggestions
                to improve efﬁciency.
              </p>
              <p>Government can introduce social business courses at levels of educational system.</p>
              <p>
                Government can have an annual social business design competition for different groups of people—youth,
                women, elderly people, retired people, corporate business executives, and award these prizes through
                national events and celebrations.
              </p>
              <p>
                Government leaders can become cheer-leaders for social businesses by drawing attention to existing
                social businesses and government’s readiness to support social businesses.
              </p>
            </div>
            <div className={boxRight}>
              <div className={imgContainer}>
                <img src={image2.src} alt="Yunus image" />
              </div>
            </div>
          </div>
        </div>
        <div className={questionBox2}>
          <h4>What May be the Expansion Strategy of Social Business ?</h4>
          <div className={box}>
            <div className={boxLeft}>
              <div className={subBox}>
                <div className={number}>
                  <h1>1</h1>
                </div>
                <div className={text}>
                  <p>
                    Replication is the best strategy to expand the out-reach of any social business. The most
                    challenging part of a social business is to develop the ﬁrst sustainable prototype. Start with one
                    or two units of social businesses as experimentation. Once these experimental units show signs of
                    success, they can be replicated in a slow motion – ﬁrst try with 3 units, then go to 10 units, then
                    speed up the process.
                  </p>
                </div>
              </div>
              <p>
                Moving step by step is an important learning process. At each step we learn from our experiences, and
                introduce important improvement in the model. When we see the model has approached a stage of
                near-perfection, the speed of replication can get faster, and spread around in various geographical
                areas.
              </p>
              <div className={imgContainer}>
                <img src={image3.src} alt="image" />
              </div>
            </div>
            <div className={boxRight}>
              <div className={subBox}>
                <div className={number}>
                  <h1>2</h1>
                </div>
                <div className={text}>
                  <p>Replication can be undertaken in the following ways:</p>
                  <p>a. May create provincial, or national or international companies to replicate,</p>
                  <p>b. May create franchising company.</p>
                </div>
              </div>
              <p>c. May create partnership companies with local entrepreneurs, and venture capital funds.</p>
              <p>d. May create partnership companies with international companies and NGOs, Foundations, etc.</p>
              <p>
                e. May enter into contracts with governments at various levels —local, regional, and national,
                companies, foundations or other service providers.
              </p>
              <p>
                f. Government can inspire all corporates, domestic and multinational, to create a social business along
                side their existing businesses. Government can give special facilities to those corporates which do so.
              </p>
              <p>
                g. Government may inspire all banks and ﬁnancial institutions to create as social business subsidiaries
                to bring ﬁnancial services to unbanked people, particularly women, and social business funds.
              </p>
              <p>h.Government can encourage all NGOs to transform part of their activities as social business.</p>
            </div>
          </div>
          <div className={btnBox} onClick={() => router.back()}>
            <Button text="Back" />
          </div>
        </div>
        <div className={issuesLayout}>
          <Layout />
        </div>
      </div>
    </div>
  );
};

export default SocialBusinessIssuesBody;
