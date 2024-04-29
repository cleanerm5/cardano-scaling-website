"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[9539],{3832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var s=t(4848),i=t(8453);const o={title:"January 2023",slug:"2023-01",authors:"ch1bo",tags:["monthly"]},a=void 0,r={permalink:"/monthly/2023-01",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2023-01-monthly.md",source:"@site/monthly/2023-01-monthly.md",title:"January 2023",description:"This report summarizes the work on Hydra since December 2022. It serves as",date:"2023-01-26T11:32:23.000Z",formattedDate:"January 26, 2023",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:5.845,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"January 2023",slug:"2023-01",authors:"ch1bo",tags:["monthly"]},unlisted:!1,prevItem:{title:"February 2023",permalink:"/monthly/2023-02"},nextItem:{title:"December 2022",permalink:"/monthly/2022-12"}},h={authorsImageUrls:[void 0]},l=[{value:"Roadmap",id:"roadmap",level:2},{value:"Development",id:"development",level:2},{value:"Community",id:"community",level:2},{value:"Themes for 2023",id:"themes-for-2023",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"This report summarizes the work on Hydra since December 2022. It serves as\npreparation for the monthly review meeting, where the teams update major project\nstakeholders on recent developments to gather their feedback on the proposed\nplan forward."}),"\n",(0,s.jsx)(n.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,s.jsxs)(n.p,{children:["Looking at the ",(0,s.jsx)(n.a,{href:"https://github.com/orgs/input-output-hk/projects/21",children:"roadmap"}),",\nthere are just a few things to report this month:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Regroomed ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/448",children:"Create updated specification for coordinated head protocol\n#448"})," to ","\ud83d\udc9b",",\nas good progress was made on the specification"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Marked ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/452",children:"Align implementation with HeadV1 protocol specification\n#452"})," as ","\ud83d\udd34",", as\nthe team experienced scope creep and has not progressed as fast as expected."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The plan is to break this initiative into smaller tasks to address and\nexplain implementation challenges."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(8800).A+"",width:"3122",height:"982"})," ",(0,s.jsx)("small",{children:(0,s.jsx)("center",{children:" The latest roadmap with minor\nchanges, which needs a reflection of the latest objectives. "})})]}),"\n",(0,s.jsx)(n.h2,{id:"development",children:"Development"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2022-12-23..2023-01-24",children:"Issues closed since last\nreport"})}),"\n",(0,s.jsx)(n.p,{children:"This month, the team worked on the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"First write-up of Hydra spec online"}),". The team has been aggregating the\nlatest definitions of on- and off-chain semantics into a new technical\nspecification. The latest version can still be found ",(0,s.jsx)(n.a,{href:"https://www.overleaf.com/project/6389ba5edbcf7a51fda1328f",children:"on\nOverleaf"}),", before\nits integration into the core Hydra repository. Should you have feedback,\nplease send it our way through one of the ",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/blob/master/SUPPORT.md",children:"communication\nchannels"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Closed more gaps in the Head Contract."})," The team addressed two more gaps in\nthe on-chain scripts based on discussions on the specification."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"All validators are authenticated now and ensure contract continuity by\nchecking for the state tokens in the output (or getting burned)."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Abort now fully reimburses all committed UTXOs, even if two parties would\nhave committed the exact same output (quite a theoretical attack vector)."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["This work is captured in\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/452",children:"#452"}),", but this work\nitem is taking quite a bit longer than expected. Also, it's a single feature\nitem, lacking some rationale on certain requirements, so we intend to break\nthis down into smaller pieces over the next days and weeks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Mutation test framework improvements."})," While closing gaps in the contracts,\nthe team realized that some of the ",(0,s.jsx)(n.a,{href:"https://hydra.family/head-protocol/haddock/hydra-node/tests/Hydra-Chain-Direct-Contract-Mutation.html",children:"mutation\ntests"}),"\nwere correctly tripping validators and making transactions invalid, but not\nalways for the right reason. In fact, some of the mutations were \u2018too harsh\u2019\nand made the even transaction not even pass phase-1 validation. The team\naddressed this by introducing a first (naiive) way to assert the right cause\nof the failure by checking strings in the validator log.\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pulls/679",children:"#679"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Add ",(0,s.jsx)(n.code,{children:"headId"})," in API and TUI."]})," The team not only added the unique ",(0,s.jsx)(n.code,{children:"headId"}),"\nto the appropriate server outputs and the TUI\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/678",children:"#678"}),", but also added\nsequence numbers and timestamps to produced outputs\n",(0,s.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/618",children:"#618"}),". This feature was\nasked for by users and simplifies identifying of heads and integration with\nthe hydra-node."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hydra explorer experiment."})," Some of the team used the holiday season to\nconduct some experiments on summarizing Hydra Heads observed on a network.\nThis quick hack already demonstrates the value of a Hydra explorer as a tool\nto measure adoption by open heads on a given network. Naturally, it would\nreuse code from the hydra-node and challenge the architecture used in it for\ntracking multiple heads. Also, it will drive discussion about the versioning\nof hydra-plutus and the possibility to track multiple versions of the Hydra\nprotocol on the chain (hashes/addresses change in each version)."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(1707).A+"",width:"2765",height:"801"})," ",(0,s.jsx)("small",{children:(0,s.jsx)("center",{children:" Hydra explorer first experiment\nUI "})})]}),"\n",(0,s.jsx)(n.h2,{id:"community",children:"Community"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"The Hydra for Voting project"}),", which got kicked off in December is picking\nup steam with deep dives into Catalyst voting and Hydra technology.\nDiscussions are currently held in various settings and the team is continuing\nto develop a picture of what is achievable."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Hydra for auctions lite paper"}),". IOG is collaborating with MLabs on\nexploring how Hydra can improve auction use cases. At this stage, the teams\ndiscussed multiple approaches on structuring the problem space with various\nHydra topologies and specific trade-offs. The full case study was published\n",(0,s.jsx)(n.a,{href:"https://www.essentialcardano.io/article/implementing-auction-projects-using-hydra",children:"on Essential\nCardano"}),".\nThe teams plan to upstream the findings back into the ",(0,s.jsx)(n.a,{href:"https://hydra.family/head-protocol/use-cases/nft-auction/",children:"use case\nsection"})," on the\nHydra website from which this project originated."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"themes-for-2023",children:"Themes for 2023"}),"\n",(0,s.jsxs)(n.p,{children:["After kicking off planning in a\n",(0,s.jsx)(n.a,{href:"http://ncoding.at:3000/head-protocol/monthly/2022-11#cardano-summit--workshop",children:"workshop"}),"\nand reflecting on ",(0,s.jsx)(n.a,{href:"https://cardanofoundation.org/en/news/hydra-head-protocol-an-open-source-solution-for-scalability/",children:"what Hydra achieved in\n2023"}),",\nthe team has progressed in fleshing out relevant themes and objectives for this\nyear to position Hydra as a sustainable open-source project in the age of\nVoltaire:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"A mainnet mature application"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Why?"})," The core contributors should be able to use the protocol on\nmainnet, so it should be maintainable and mature enough to lock some ada in\na Hydra Head using a reference DApp (eg, hydraw). By creating and growing\nthis DApp, the team will\n",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Eating_your_own_dog_food",children:"dogfood"})," features\nand hence improve additional usability."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"How to measure?"})," Number of heads on mainnet > 0 and core contributors\nfeel confident to lock at least 100\u20b3 in a Hydra Head on mainnet."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Next steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Publish Hydra Head V1 specification"}),"\n",(0,s.jsx)(n.li,{children:"Close gaps in implementation and release 0.9.0"}),"\n",(0,s.jsx)(n.li,{children:"Create a request for proposals (RFP) to audit the specification and its\nimplementation"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Increase adoption"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Why?"})," The team wants to showcase what is possible with Hydra through\nbenchmarks and lighthouse projects, enabling use cases and reducing friction\nto use Hydra. Also, ensuring interoperability through open standards and\nreference implementations."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"How to measure?"})," Number of third-party created heads on any network > 0"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Next steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Build a basic Hydra Head explorer to measure adoption"}),"\n",(0,s.jsx)(n.li,{children:"Benchmark off-chain performance (of a selected scenario)"}),"\n",(0,s.jsx)(n.li,{children:"Demonstrate Hydra for payments to potential users"}),"\n",(0,s.jsx)(n.li,{children:"Support Hydra for voting project"}),"\n",(0,s.jsx)(n.li,{children:"Hydra for auctions project exploring a delegated voucher auction"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Sustainable open-source-development"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Why?"})," The team wants to scale Cardano in the long run. Hence this project\nshould not be owned by a single entity, but by the community and the Cardano\nnetwork itself. It is thus essential to make contributions to the project\npossible and ultimately it should be easy to become a contributor."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"How to measure?"})," Number of contributors on GitHub"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Next steps:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Open up monthly reviews"}),"\n",(0,s.jsx)(n.li,{children:"Add tutorials to the website"}),"\n",(0,s.jsx)(n.li,{children:"Publish and maintain a use-case-centric roadmap and feature map"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,s.jsx)(n.p,{children:"This monthly review was the first public one with not only stakeholders from IOG\nand the CF, but also collaborators of the latest projects. This was the first\nstep to a more open and transparent development process."}),"\n",(0,s.jsx)(n.p,{children:"The teams showed some classic demos \u2013 like the \u2018hydraw\u2019 application which has\nbeen running on the same Hydra Head for four weeks now \u2013 and some new\ndevelopments on the Hydra explorer and minor improvements to hydra-node API and\nTUI."}),"\n",(0,s.jsxs)(n.p,{children:["It was very interesting to bring various teams together to exchange ideas and\nthoughts on the individual roadmaps for the new year. The teams also shared the\nrelevant themes and objectives of the Hydra project for 2023 (as also listed\nabove). They will now make sure to reflect these steps into this concrete\n",(0,s.jsx)(n.a,{href:"https://github.com/orgs/input-output-hk/projects/21",children:"roadmap"})," such that it will\ncontain ",(0,s.jsx)(n.a,{href:"https://www.agilealliance.org/glossary/mmf/",children:"marketable features"}),"\nbringing us closer to these goals."]})]})}function c(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1707:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2023-01-explorer-051813ee8b3a4cac21ca35d6ba2f83d0.png"},8800:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/2023-01-roadmap-d445b3f9b76a572928bb5b6b3e404442.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);