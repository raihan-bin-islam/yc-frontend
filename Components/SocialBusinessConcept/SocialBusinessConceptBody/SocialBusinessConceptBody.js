import React from "react";

// COMPONENT
import Button from "../../Shared/Button/Button";

// IMAGES
import image1 from "../../../public/assets/images/social_business/concept_image.png";
import image2 from "../../../public/assets/images/social_business/concept_image-2.png";
import image3 from "../../../public/assets/images/social_business/concept_image-3.png";

// CSS
import styles from "./SocialBusinessConceptBody.module.scss";

const SocialBusinessConceptBody = () => {
  const {
    conceptBody,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionOneLeft,
    sectionOneRight,
    imgContainer,
    sectionTwoLeft,
    sectionTwoRight,
    gridBox,
    gridBox1,
    contentContainer,
    boxLeft,
    boxRight,
    box,
    name,
    title,
    date,
  } = styles;

  return (
    <div className={conceptBody}>
      <div className={`${sectionOne} container-layout`}>
        <div className={sectionOneLeft}>
          <h1>
            “Social business is a new concept and its practice is just
            beginning.”
          </h1>
          <p>
            Social business is a cause-driven business. In a social business,
            the investors/owners can gradually recoup the money invested, but
            cannot take any dividend beyond that point. Purpose of the
            investment is purely to achieve one or more social objectives
            through the operation of the company, no personal gain is desired by
            the investors. The company must cover all costs and make profit, at
            the same time achieve the social objective, such as, healthcare for
            the poor, housing for the poor, financial services for the poor,
            nutrition for malnourished children, providing safe drinking water,
            introducing renewable energy, etc. in a business way.
          </p>
          <p>
            The impact of the business on people or environment, rather the
            amount of profit made in a given period measures the success of
            social business. Sustainability of the company indicates that it is
            running as a business. The objective of the company is to achieve
            social goals.
          </p>
        </div>
        <div className={sectionOneRight}>
          <div className={imgContainer}>
            <img src={image1.src} alt="image" />
          </div>
        </div>
      </div>
      <div className={`${sectionTwo} container-layout`}>
        <h2>Clarifications on Social Business</h2>
        <div className={gridBox}>
          <div className={sectionTwoLeft}>
            <p>
              I am not opposed to making profit. Even social businesses are
              allowed to make profit with the condition that profit stays with
              the company; the owners will not take profit beyond the amount
              equivalent to investment. Social business is a new category of
              business. It does not stipulate the end of the existing type of
              profit-making business. It widens the market by giving a new
              option to consumers. It does not intend to monopolise the market
              and take the existing option away. It adds to the competition. It
              brings a new dimension to the business world, and a new feeling of
              social awareness among the business community.
            </p>
            <p>
              When we approach the concept of social business from the
              philanthropy side, it looks very convincing and logical. Why
              should everything in philanthropy be given away? If some of these
              goals can be achieved more efficiently and sustainably in a
              (social) business format, then why not take that route? After all
              our purpose is to achieve the social goal.
            </p>
          </div>
          <div className={sectionTwoRight}>
            <p>
              But when you approach it from the orthodox business side, it tends
              to look a bit out of tune. Why on earth give up profit? Why should
              anyone run a business without profit? I understand the surprise
              perfectly.
            </p>
            <p>
              <b>Let me clarify:</b> I am not asking any businessperson to give
              up any of their businesses. Nor am I asking them to convert some
              of their businesses into social business. The idea of “giving up”
              something creates this shock wave. I am not asking anybody to
              “give up” anything. All I am saying, if you are worrying about a
              social problem (while totally engaged in your routine business) I
              have a message for you, you can make a significant contribution in
              resolving the problem. If you put your mind seriously into it, you
              may even open the door to eliminate the problem globally. You can
              do both: conventional business and social business.
            </p>
            <p>
              It is all upto you to decide whether you want to do a such thing
              or not. Nobody will raise an accusing finger at you if you do no
              such thing. But you may feel happy if you do it. I am suggesting a
              way which may make you a happier person.
            </p>
          </div>
        </div>
      </div>
      <div className={sectionThree}>
        <div className="container-layout">
          <h2>A Learning Process</h2>
          <p>
            It is a great learning process. You are doing things which you never
            did before. You are thinking in a way which you never did before.
            You are surprised to see you are enjoying it a lot. You start
            digging into your experiences to see what is relevant for the task.
            You check through the reservoir of technology that you are familiar
            with, start contacting the pool of experts that you have gotten to
            know in your business, to achieve your new goal. You start exploring
            a new world which was totally unknown to you. You realise that you
            are now wearing “social business glasses” on your eyes, you see
            things which you never saw before. You start sensing that your eyes
            were fitted with “profit-maximizing glasses” all along, while you
            thought these were your natural eyes in your economic world.
          </p>
          <p>
            Now when you turn your eyes to your own profit-making businesses you
            start noticing things which you never noticed before. You bring
            new-gained experiences from your new business to your old
            businesses. Slowly you move towards becoming an multi-dimensional
            person, rather than a robot-like person.
          </p>
        </div>
        <div className={`${gridBox} container-layout`}>
          <div className={imgContainer}>
            <img src={image2.src} alt="image" />
          </div>
          <div className={contentContainer}>
            <p>
              Some people ask me why can’t you run businesses with some profit
              and some social benefit “doing well by doing good”, as it is
              popularly described.
            </p>
            <p>
              Of course, it can be done. I am never against it. But I am trying
              go to the ultimate point where you don’t make any profit for
              yourself at all. This is easy to identify, easy to handle in day
              to day decision making.
            </p>
            <p>
              When you mix profit and social benefit it gets complicated for the
              CEO. His thinking process gets clouded. He does not see clearly.
              More often this CEO will take decision in favour of profit, and
              exaggerate the social benefit. Owners will go along with it.
              Social business gives a clear unambiguous mandate to the
              management. There is no balancing act involved. If you can agree
              to take a “small” profit, you can also persuade yourself to take
              zero profit. Once you get there you get rid of all old ways of
              thinking. You prepare yourself to explore a new world, a new way
              of seeing things, and doing things in a different way. When you
              were in the world of a “small profit” you were still operating in
              the old world, with old ways of doing things, only restraining
              yourself here and there.
            </p>
          </div>
        </div>
        <div className="container-layout">
          <p>
            Another way to put the same question is: Why can’t you allow thee
            investors in social business to get a small fixed profit say, 1%
            dividend. My answer is the same. I may describe this situation by
            saying something like this: you are in a “no smoking” building, you
            are arguing “Why can’t I be allowed to take just one small puff ?”
            Answer is simple it destroys the attitude. In Ramadan, Muslims are
            not allowed to eat or drink until the after the sunset. Why not take
            a sip of water during the day? It destroys the strength of the
            mental commitment. You lose a lot for a small favour.
          </p>
          <p>
            Social business is about making complete sacrifice of financial
            reward from business. It is about total delinking from the old
            framework of business. It is not about accommodation of new
            objectives within the existing framework. Unless this total
            delinking from personal financial gain can be established you’ll
            never discover the power of real social business. Some times you can
            set up a technically correct social business with the purpose of
            making profit through your other companies by selling products or
            services to this social business company. This will be a clear
            sabotage of the concept. There may be many other subtle ways by
            which one can weaken the concept and practice of social business. A
            genuine social business investor must make all efforts so that he
            does not walk into this trap unwittingly.
          </p>
        </div>
        <div className={`${gridBox1} container-layout`}>
          <div className={boxLeft}>
            <p>
              Capitalism has created poverty by focusing exclusively on profit.
              It built a fairy-tale of prosperity for all. This never happened.
              That’s why Europe decided to entrust the government to take care
              of poverty, unemployment and health. They were smart enough to
              figure out the emptiness of capitalism in solving these problems.
            </p>
            <p>Author’s Summary on Creating a World Without Poverty</p>
            <p>
              While free market capitalism is thriving globally, almost
              unopposed now, and bringing unprecedented prosperity to many, half
              of the world lives on two dollars a day or much less. Eradication
              of poverty remains the biggest challenge before the world.
              Colossal social problems and deprivations, mostly poverty-related
              and very unevenly distributed around the globe, continue to shame
              us everyday. Obviously the free market has failed much of the
              world. Many people assume that if free markets can’t solve social
              problems, then governments can. After all, the government is
              supposed to represent the interests of society as a whole. But
              decades and even centuries of experience has shown that while
              government must do its part to help alleviate our worst problems,
              it alone can not solve them.
            </p>
          </div>
          <div className={boxRight}>
            <p>
              Fortunately for us there is a keen desire among many to lend a
              hand through charity, for addressing the problems of poverty and
              other social problems. Charity is rooted in basic human concern
              for other humans. These days concern is usually expressed in the
              shape of non-profits and NGOs which may take various names and
              forms. Then there are aid organizations sponsored by rich
              governments’ bilateral and multilateral. Nonprofits and aid
              organizations are trying to keep the problems within some control.
              But charity is a form of trickle-down economics; if the trickle
              stops, so does help for the needy. On the other hand multilaterals
              like World Bank focus only on growth as the means of helping the
              poor, but can not see that the poor people can be actors
              themselves. There are serious questions about the type of growth
              that can help the poor. As another response to the global social
              problems some businesses are identifying themselves with the
              movement for Corporate Social Responsibility (CSR), and are trying
              to do good to the people while conducting their business. But
              profit-making still remains their main goal, by definition. Though
              they like to talk about triple bottom lines of financial, social,
              and environmental benefits, ultimately only one bottom line calls
              the shot: financial profit.
            </p>
          </div>
        </div>
        <div className={`${box} container-layout`}>
          <p>
            I always believed that poverty can be totally conquered in our own
            lifetimes if the right approach is adopted. I based my belief on the
            inherent ability of the poor that can be unleashed once they are
            given the opportunity to help themselves. This I have proved in
            action through my three decades of experience with Grameen Bank. The
            concept of microcredit did not exist before I initiated Grameen Bank
            in Bangladesh, which basically recognized that credit without
            collateral is a fundamental right of the poor. Our success with this
            in my own country has been widely replicated all over the world
            including in some of the richest countries; and the Nobel Peace
            Prize 2006 for Grameen Bank and myself is one recognition of that
            success. The story of Grameen Bank has been told in my earlier book:
            “Banker to the Poor”. In this new book I have described the further
            evolution of Grameen System. But more importantly I have introduced
            and elaborated here my broadened concept of social business, that
            the Grameen experience has led me into.
          </p>
          <p>
            Grameen allowed the poor to be an actor in the free market and to
            enjoy some of its fruits to try to come out of poverty. It is
            fundamentally a business model, pure and simple, but a social
            business. There can be other social businesses. They are just like
            any other business; but for social objectives and not for personal
            gain or dividend. I have tried to show in the book why social
            business can succeed in addressing social problems where other means
            mentioned above have failed. social business should not be confused
            with the term social enterprise which is used in a more encompassing
            sense and includes NGOs, personal initiatives, charities, etc., and
            may include social business too.
          </p>
          <p>
            Social business introduces a totally revolutionary dimension to the
            free market economy. It does not interfere with the mechanism
            through which the normal Profit Making Business (PMB) works and
            prospers capitalization, expert business management, competitiveness
            etc., but investors here do not receive any dividend, though they
            can recover their investment if they want to, to reinvest in other
            social businesses or PMBs. The satisfaction gained in achieving the
            stated social goals are the only motive behind the investment, and
            the business will be evaluated according to that standard.
            Essentially it is a non-loss, non-dividend business aimed at social
            objectives education, health, environment, whatever is needed to
            address the problems faced by society. The profits here remain with
            the business and help it to grow further. The whole thing is based
            on the premise that entrepreneurs need not be motivated only by the
            profits they personally receive, but can also be motivated by social
            goals and may enjoy success there with equal satisfaction. The
            important thing is not to mix up a Social Business with a PMB. In
            fact the inclusion of Social businesses alongside PMBs in the
            business world will give the free market capitalism a larger, nobler
            and a more fulfilling purpose. Its advantages over straightforward
            charity are many efficiencies, continuous use with each turnover,
            competition with PMBs following the same rules, utilization of
            business innovations being some of the most important ones.
          </p>
        </div>
        <div className={`${gridBox} container-layout`}>
          <div className={contentContainer}>
            <p>
              There can be two types of social business. Type One focuses on
              businesses dealing with social objectives only, as has just been
              mentioned. Type Two can take up any profitable business so long as
              it is owned by the poor and the disadvantaged, who can gain
              through receiving direct dividends or by some indirect benefits.
              There are various ways how the ownership can go to the poor. The
              two types can be mixed together in the same social business as has
              happened in the case of Grameen Bank. In a similar mixture of the
              two types, a socially beneficial rural toll road or bridge can be
              built by a company as a social business whose ownership will
              belong to the poor. On the other hand a huge project such as the
              Deep-Sea Mega Port in Bangladesh, which I have been advocating
              for, which will be used by several countries in the whole region
              and can potentially change the economic face of Bangladesh, can be
              built as a social business owned by the poor women of the country.
            </p>
          </div>
          <div className={imgContainer}>
            <img src={image3.src} alt="image" />
          </div>
        </div>
        <div className="container-layout">
          <p>
            Is this an utopia? Will there be social businesses outside the realm
            of microcredit? Who will invest in such social businesses? I could
            answer these questions confidently in my new book, not only because
            I have faith in my idea and on the ability of the entrepreneurs to
            have social motives as well as profit making motives; but also
            because I am seeing this actually to happen at this very moment. I
            have devoted a good part of the book on the details of the first
            such social business we have started Grameen Danone Company which
            went into operation in early 2007. The idea of the company was born
            over just a casual lunch I had with Franck Riboud, the Chairman and
            CEO of Groupe Danone, a large French corporation a world leader in
            diary products. It took just that time for me to convince him that
            an investment in a social business is a worthwhile thing for Danone
            shareholders. Even though it will not give any personal dividend to
            them, he agreed to the proposition even before I fully explained it
            to him. It took somewhat more time to fix up the modalities, the
            product (a fortified sweet yogurt for the poor malnourished children
            of Bangladesh at a price they can afford), the financing, tax and
            regulatory issues, new yard sticks for evaluating business and many
            other such details. And I have devoted many pages of the book on
            these details to show how all these things can be taken care of. The
            yogurt “Shokti Doi” (Energy Yogurt) is already in the market.
          </p>
          <p>
            The Grameen System has invested in a second social business this
            time an Eye Hospital where the poor can have eye treatment and
            cataract operations at a very low cost and all others in the small
            town and the villages around will have an excellent medical facility
            where there was not any like that before.
          </p>
          <p>
            Social business is a new concept and its practice is just beginning.
            As my book reveals, it has to make a lot more exploration while
            gaining more experience. There are challenges to be faced and
            solutions to be developed. For example, we had to invent a totally
            innovative marketing system to keep the market fragmented so that
            the low cost “Shokti Doi” is reserved only for the poor children and
            does not disappear in the urban market for the well to do. I have
            also touched upon other issues such as how can the ownership of the
            Type Two social business be transferred to the poor, or how can the
            wonderful opportunities offered by IT be best deployed for social
            business.
          </p>
          <p>
            One thing is very clear to me that with social business taking off,
            the world of free market capitalism will never be the same again,
            and it then will really be able to deliver a deathblow on global
            poverty. I am sure, many business wizards and successful business
            personalities will apply their abilities to this new challenge the
            challenge of creating a poverty-free world within a short time. At
            the moment we are seeing merely the line of horizon. Soon a good
            part of business genius, creativity and innovation of the world will
            devote itself to this new goal of social good. A whole new stock
            market with its new indices will thrive in the financial capitals of
            the world motivated by this new incentive. It will accelerate the
            process of poverty eradication to an unthinkable pace using the same
            market mechanism which accelerated the global prosperity for the
            rich in the first place.
          </p>
        </div>
      </div>
      <div className={`${sectionFour} container-layout`}>
        <h1>Welcome to the new world of social business.</h1>
        <span className={name}>Muhammad Yunus</span>
        <span className={title}>2006 Nobel Peace Laureate</span>
        <span className={date}>25 December 2007</span>
        <Button text="Back" />
      </div>
    </div>
  );
};

export default SocialBusinessConceptBody;
