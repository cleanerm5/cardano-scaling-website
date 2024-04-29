"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[8070],{9727:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(4848),r=n(8453);const s={title:"March 2024",slug:"2024-03",authors:["ch1bo","jpraynaud"],tags:["monthly"]},a=void 0,o={permalink:"/monthly/2024-03",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2024-03-monthly.md",source:"@site/monthly/2024-03-monthly.md",title:"March 2024",description:"This is a monthly report of progress on \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects since February 2024. These reports have recently moved to https://cardano-scaling.org/monthly (more details here).",date:"2024-03-28T07:21:14.000Z",formattedDate:"March 28, 2024",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:8.505,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Jean-Philippe Raynaud",title:"Software Engineering Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"}],frontMatter:{title:"March 2024",slug:"2024-03",authors:["ch1bo","jpraynaud"],tags:["monthly"]},unlisted:!1,nextItem:{title:"February 2024",permalink:"/monthly/2024-02"}},h={authorsImageUrls:[void 0,void 0]},l=[{value:"Mithril",id:"mithril",level:2},{value:"Transaction signatures",id:"transaction-signatures",level:3},{value:"Transaction verification in frontend",id:"transaction-verification-in-frontend",level:3},{value:"Prometheus metrics",id:"prometheus-metrics",level:3},{value:"Pallas updates",id:"pallas-updates",level:3},{value:"Deprecation warning",id:"deprecation-warning",level:3},{value:"Hydra",id:"hydra",level:2},{value:"Notable updates",id:"notable-updates",level:3},{value:"Conway support",id:"conway-support",level:3},{value:"Streaming plugins",id:"streaming-plugins",level:3},{value:"Community",id:"community",level:2},{value:"Mithril office hours",id:"mithril-office-hours",level:3},{value:"Hydra governance walkthrough",id:"hydra-governance-walkthrough",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["This is a monthly report of progress on \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects since February 2024. These reports have recently moved to ",(0,i.jsx)(t.a,{href:"https://cardano-scaling.org/monthly",children:"https://cardano-scaling.org/monthly"})," (more details ",(0,i.jsx)(t.a,{href:"/monthly/2024-02",children:"here"}),")."]}),"\n",(0,i.jsxs)(t.p,{children:["This document serves as a preparation for and a written summary of the monthly stakeholder review meeting, which is announced on our Discord channels and held on Google Meet. This month, the meeting was held on 2024-03-27, using these ",(0,i.jsx)(t.a,{href:"https://docs.google.com/presentation/d/1pxV7VTDHW-wtvJy1RDuei7H14gQvgrrUlqoiOco6j9E",children:"slides"})," and ",(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1SL5Js8wBIoBeb87exCmZTWtHSQy7xF1W/view",children:"you can see the recording here"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"mithril",children:"Mithril"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-02-29..2024-03-31",children:"Issues and pull requests closed in\nMarch"})}),"\n",(0,i.jsxs)(t.p,{children:["This month, there has been a noticeable increase in SPOs joining the Mithril protocol. In particular, many new multi-pool operators have set up the Mithril signer in their infrastructure. At the end of epoch ",(0,i.jsx)(t.strong,{children:"#475"}),", there were ",(0,i.jsx)(t.strong,{children:"230"})," pools registered with ",(0,i.jsx)(t.strong,{children:"4.6B\u20b3"})," stake involved representing approximately 20% of the total active stake. We will continue to provide regular updates to the community to encourage their participation in the protocol."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(204).A+"",width:"781",height:"466"})}),"\n",(0,i.jsxs)(t.p,{children:["We have released the new Mithril distribution ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/releases/tag/2412.0",children:(0,i.jsx)(t.code,{children:"2412.0"})}),". This release includes several critical updates and enhancements, such as support for Prometheus metrics endpoint in signer, deprecation of the ",(0,i.jsx)(t.code,{children:"snapshot"})," command in the client CLI, full Pallas based implementation of the chain observer, and support for Cardano node version ",(0,i.jsx)(t.code,{children:"8.9.0"}),"."]}),"\n",(0,i.jsx)(t.h3,{id:"transaction-signatures",children:"Transaction signatures"}),"\n",(0,i.jsxs)(t.p,{children:["We have developed a signing structure that enables quick proof generation while maintaining a light footprint on the signer for the ",(0,i.jsx)(t.code,{children:"mainnet"}),". This is crucial as we need to handle a vast amount of transactions (100 million). To achieve this, we created a ",(0,i.jsx)(t.strong,{children:"block range Merkle tree"}),", which stores transactions in a Merkle tree and uses its root to create another Merkle tree. According to the our benchmark tests, a batch proof for ",(0,i.jsx)(t.code,{children:"100"})," transactions can now be created in less than ",(0,i.jsx)(t.code,{children:"250 ms"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(4663).A+"",width:"1426",height:"700"})}),"\n",(0,i.jsxs)(t.p,{children:["We have also completed the roadmap of the MVP that will be released on ",(0,i.jsx)(t.code,{children:"mainnet"}),":"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(683).A+"",width:"793",height:"808"})}),"\n",(0,i.jsx)(t.h3,{id:"transaction-verification-in-frontend",children:"Transaction verification in frontend"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/@mithril-dev/mithril-client-wasm",children:"Mithril client WASM library"})," has been used to implement a Cardano transaction verifier inside the ",(0,i.jsx)(t.a,{href:"https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.testing-sanchonet.api.mithril.network%2Faggregator",children:"Mithril explorer"}),".\nThis feature is currently available only on the ",(0,i.jsx)(t.code,{children:"testing-sanchonet"})," network and will be progressively rolled out to the other Mithril networks.\nWallet and DApp developers could leverage the client WASM library to implement a security layer that verifies transactions provided by a third party."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(8754).A+"",width:"1776",height:"865"})}),"\n",(0,i.jsx)(t.h3,{id:"prometheus-metrics",children:"Prometheus metrics"}),"\n",(0,i.jsxs)(t.p,{children:["We have released a new Prometheus endpoint with the latest stable version of the signer. The feature can be easily activated by the SPOs as explained in this ",(0,i.jsx)(t.a,{href:"https://mithril.network/doc/dev-blog/2024/03/26/mithril-signer-prometheus-endpoint",children:"developer blog post"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["Additionally, we created a Grafana template to easily set up a dashboard for this Prometheus endpoint: ",(0,i.jsx)(t.a,{href:"https://grafana.com/grafana/dashboards/20776-mithril-signer/",children:"https://grafana.com/grafana/dashboards/20776-mithril-signer/"})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(263).A+"",width:"1613",height:"755"})}),"\n",(0,i.jsx)(t.h3,{id:"pallas-updates",children:"Pallas updates"}),"\n",(0,i.jsxs)(t.p,{children:["The latest stable distribution now includes a fully implemented chain observer powered by the ",(0,i.jsx)(t.a,{href:"https://crates.io/crates/pallas",children:(0,i.jsx)(t.code,{children:"pallas"})})," crate. Additionally, we have been collaborating with TxPipe to implement the ",(0,i.jsx)(t.code,{children:"chainsync"})," mini-protocol with Pallas. This will significantly reduce the latency of signatures for Cardano transactions."]}),"\n",(0,i.jsx)(t.h3,{id:"deprecation-warning",children:"Deprecation warning"}),"\n",(0,i.jsxs)(t.p,{children:["We have deprecated the ",(0,i.jsx)(t.code,{children:"snapshot"})," command of the Mithril client CLI as explained in this ",(0,i.jsx)(t.a,{href:"https://mithril.network/doc/dev-blog/2024/03/26/client-cli-deprecated-command",children:"developer blog post"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["We recommend using the replacement ",(0,i.jsx)(t.code,{children:"cardano-db snapshot"})," command for users of the client CLI."]}),"\n",(0,i.jsx)(t.h2,{id:"hydra",children:"Hydra"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-02-29..2024-03-31",children:"Issues and pull requests closed in\nMarch"})}),"\n",(0,i.jsxs)(t.p,{children:["Hydra project\n",(0,i.jsx)(t.a,{href:"https://github.com/orgs/input-output-hk/projects/21/views/7",children:"roadmap"})," did not\nchange much this month:"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"The roadmap with features and ideas",src:n(2064).A+"",width:"5372",height:"2978"}),"\n",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"The latest roadmap with features and ideas"})})]}),"\n",(0,i.jsx)(t.h3,{id:"notable-updates",children:"Notable updates"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Evolved the user-requested ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/discussions/1337",children:"feature idea #1337"})," into a new feature on the roadmap to ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1350",children:"revise POST /commit endpoint interface #1350"}),". This will allow committing into a head directly from advanced smart contracts. It remains unclear whether this will be part of the upcoming ",(0,i.jsx)(t.code,{children:"0.16.0"})," release."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Captured the new feature idea of ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1329",children:"Directly open heads #1329"})," as item on the roadmap. This requires further grooming and could supersede other ideas like ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/699",children:"Always abortable head #699"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Mostly completed ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1213",children:"Drop support for JSON encoded transactions #1213"})," and ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1325",children:"Streaming plugins #1325"}),", which will be released soon as ",(0,i.jsx)(t.code,{children:"0.16.0"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Made substantial progress on ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1057",children:"Incremental decommit #1057"}),", however, this is unlikely to be released as part of ",(0,i.jsx)(t.code,{children:"0.16.0"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Fully prepared ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1178",children:"Switch L2 ledger to Conway #1178"}),", such that it can be released directly after the hard fork on the Cardano layer 1."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["As we improve our understanding of pivotal features such as incremental commits and decommits, the feature set required to address [known issues and limitations] (",(0,i.jsx)(t.a,{href:"https://hydra.family/head-protocol/docs/known-issues/",children:"https://hydra.family/head-protocol/docs/known-issues/"}),") is being narrowed down, and the scope for a convincing version ",(0,i.jsx)(t.code,{children:"1.0.0"})," is becoming clearer."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"conway-support",children:"Conway support"}),"\n",(0,i.jsx)(t.p,{children:"As mentioned in previous roadmap updates, we separated work to support the upcoming Conway era on Cardano in two:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1177",children:"Conway support #1177"})," will make the ",(0,i.jsx)(t.code,{children:"hydra-node"})," support Conway and allow users to keep heads open across the hard fork."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1178",children:"Drop Babbage support #1178"})," will eventually drop support for the Babbage era and retain maintainability."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["While the former was already merged and is currently released in version ",(0,i.jsx)(t.code,{children:"0.15.0"})," onwards, the team prepared the latter this month."]}),"\n",(0,i.jsxs)(t.p,{children:["Ideally switching the transaction format in the ",(0,i.jsx)(t.code,{children:"hydra-node"})," is as simple as setting the type alias ",(0,i.jsx)(t.code,{children:"type Era = Conway"}),". However, the code was ",(0,i.jsx)(t.code,{children:"Babbage"}),"-specific in several areas and work on this resulted in various pull requests making switching easier in several places: ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/pull/1326",children:"#1326"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/pull/1327",children:"#1327"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/pull/1328",children:"#1328"}),", ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/pull/1334",children:"#1334"}),", and ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/pull/1342",children:"#1342"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["The result is a relatively simple switch in this ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/pull/1338",children:"draft pull request"})," and available on branch ",(0,i.jsx)(t.code,{children:"lc/conway-support"}),", which we intend to bump and merge once the public Cardano networks hard fork."]}),"\n",(0,i.jsxs)(t.p,{children:["Having full ",(0,i.jsx)(t.code,{children:"Conway"})," era support, including ",(0,i.jsx)(t.code,{children:"PlutusV3"}),", on the Hydra layer 2 already prepared on a branch allows early adopting users from the community to explore and use this already. Modulo-P has been on the forefront here by developing zero-knowledge hybrid DApps and wrapping the Hydra branch up in this ",(0,i.jsx)(t.a,{href:"https://github.com/Modulo-P/hydra-node-plutusv3",children:"example repository"}),"."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["A full-on ",(0,i.jsx)(t.code,{children:"Conway"})," ",(0,i.jsx)(t.code,{children:"hydra-node"})," can be used on ",(0,i.jsx)(t.code,{children:"SanchoNet"})," already and the Hydra protocol scripts did not change from ",(0,i.jsx)(t.code,{children:"master"})," / the upcoming ",(0,i.jsx)(t.code,{children:"0.16.0"}),". However, note that the ",(0,i.jsx)(t.a,{href:"http://explorer.hydra.family",children:"Hydra explorer"})," shows such ",(0,i.jsx)(t.code,{children:"Conway"}),"-built heads only as ",(0,i.jsx)(t.code,{children:"Initializing"}),". More details about why can be found in this ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/pull/1373",children:"pull request"}),"."]})}),"\n",(0,i.jsx)(t.h3,{id:"streaming-plugins",children:"Streaming plugins"}),"\n",(0,i.jsxs)(t.p,{children:["SundaeLabs is working on a Hydra-based layer two protocol (",(0,i.jsx)(t.code,{children:"gummiworm"}),") that requires the usage of ",(0,i.jsx)(t.code,{children:"hydra-node"})," components in a different way than the default setup. As part of this development, SundaeLabs submitted a Fund10 Catalyst proposal to enhance the Hydra node by adding features that would facilitate not only their work but also the work of everyone building on Hydra."]}),"\n",(0,i.jsx)(t.p,{children:"They have been working on a plugin architecture to enable the infiltration and exfiltration of events, which enables hygienic forks of Hydra that feature additional connections to the outside world. They are interested in consuming the Hydra event stream via Amazon Kinesis and storing transaction archives on S3 for later reference."}),"\n",(0,i.jsxs)(t.p,{children:["After an initial design phase resulting in ",(0,i.jsx)(t.a,{href:"https://hydra.family/head-protocol/adr/29/",children:"ADR29"}),", they contributed the event source and sink abstractions, and refactored the Hydra node to use these new extension points together with core contributors. The ",(0,i.jsx)(t.code,{children:"EventSource"})," and ",(0,i.jsx)(t.code,{children:"EventSink"})," interfaces, along with the configurable list of ",(0,i.jsx)(t.code,{children:"eventSinks"})," in the main ",(0,i.jsx)(t.code,{children:"HydraNode"})," handle, allow to extend the ",(0,i.jsx)(t.code,{children:"hydra-node"})," with any external system. It also paves the way for more scalable persistence methods on the mainline Hydra node, and might even allow refactoring the existing API server as an ",(0,i.jsx)(t.code,{children:"EventSink"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"community",children:"Community"}),"\n",(0,i.jsx)(t.h3,{id:"mithril-office-hours",children:"Mithril office hours"}),"\n",(0,i.jsx)(t.p,{children:"As the Catalyst project of TxPipe on Mithril is completed, we want to build upon this initial maintenance work in a more open format. For this, we are transforming our alignment calls into a public weekly office hour where we invite the community to join and discuss concrete pull requests, issues and questions on Mithril."}),"\n",(0,i.jsxs)(t.p,{children:["\ud83d\udc49"," Mithril office hours happen every Tuesday at 16:00 UTC on the ",(0,i.jsx)(t.a,{href:"https://discord.com/channels/826816523368005654/1146481948794032260",children:"#mithril-live"})," Discord channel."]}),"\n",(0,i.jsx)(t.h3,{id:"hydra-governance-walkthrough",children:"Hydra governance walkthrough"}),"\n",(0,i.jsx)(t.p,{children:"This month, the Hydra team has been asked to provide a walkthrough of how we use GitHub to run and govern the project. We have prepared a video that explains how we use Github issues, pull requests, discussions, and projects to manage the development of the Hydra project. However, it is important to note that this information represents only a current view and we are enthusiastic about continuously improving the processes to make them more transparent."}),"\n",(0,i.jsx)("center",{children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/JGUeO7A6mMU?si=T5Dy4zuRb6NLReJE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})}),"\n",(0,i.jsx)("br",{}),"\n",(0,i.jsx)(t.p,{children:"We are excited to announce that we are looking to establish a Hydra working group at Intersect. This group will aim to involve more community members in proposing feature backlogs, roadmaps, and RFPs. Initially, the focus of this working group will be on the concrete Hydra Head protocol (state channels). However, variations such as Hydrozoa, and combined scalability protocols like Gummiworm, Lightning-like payment channel networks, or the Hydra Tail protocol (~ rollups) will also require more community involvement. Stay tuned for more updates on this in the upcoming months."}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["We held the monthly review meeting for March 2024 on 2024-03-27 via Google Meet,\npresenting these ",(0,i.jsx)(t.a,{href:"https://docs.google.com/presentation/d/1pxV7VTDHW-wtvJy1RDuei7H14gQvgrrUlqoiOco6j9E",children:"slides"})," and this ",(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1SL5Js8wBIoBeb87exCmZTWtHSQy7xF1W/view",children:"recording"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This month we have made significant progress on Mithril transaction signatures, while the Hydra team has been busy working on the incremental commits/decommits features. Both projects are fully prepared for the upcoming Conway hard fork on Cardano and continuously demonstrate user experience improvements."}),"\n",(0,i.jsx)(t.p,{children:'Besides the Hydra explorer user interface, the teams also showcased the Mithril transaction verification feature in the Mithril explorer frontend. This demonstrates that Cardano transactions can be additionally verified using Mithril certificates from within a web browser. Taking this even further, we believe that such a "Verified with Mithril" checkmark can provide additional level of confirmation for users of light wallets and Cardano DApps!'}),"\n",(0,i.jsxs)(t.p,{children:["Besides these, Modulo-P showcased their early adoption of Hydra heads using ",(0,i.jsx)(t.code,{children:"Conway"})," and ",(0,i.jsx)(t.code,{children:"PlutusV3"})," for their quite involved zero-knowledge protocols. Briefly after the meeting they released a first look on their ",(0,i.jsx)(t.a,{href:"https://zkmastermind.modulo-p.io/",children:"zkMastermind DApp"}),". Also, SundaeLabs presented their streaming plugins for Hydra. Both are examples of how the Hydra protocol can be extended and used in different ways, and we are excited to see more community contributions in the future."]}),"\n",(0,i.jsx)(t.p,{children:"As a closing remark, we see the trend of decentralizing governance on both projects, Hydra and Mithril, while at large the overall 'age of Voltaire' is unfolding. Consequently, we anticipate moves, merges, or restructuring of repositories, projects, and working groups. What an exciting time to be a part of this big Cardano community!"})]})}function c(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},2064:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-03-hydra-roadmap-3edebbdeb6a431d9f7e69271a5d60721.jpg"},4663:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-03-mithril-block-range-mktree-6666dadea204c9cf53e2560f6662d114.jpg"},683:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-03-mithril-cardano-tx-roadmap-c38ffa89357d117598610d1836a50526.png"},8754:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-03-mithril-explorer-d854dcb93d0daccf9886593c82a79a74.png"},204:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-03-mithril-participation-77cfd3b9237a0e17e2babf6aad914e15.png"},263:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-03-mithril-prometheus-metrics-f3d048549b1d36f839bb33597824216c.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(6540);const r={},s=i.createContext(r);function a(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);