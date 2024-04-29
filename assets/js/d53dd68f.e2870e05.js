"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[619],{102:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(4848),o=n(8453);const a={title:"February 2024",slug:"2024-02",authors:["ch1bo","jpraynaud","v0d1ch"],tags:["monthly"]},r=void 0,s={permalink:"/monthly/2024-02",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2024-02-monthly.md",source:"@site/monthly/2024-02-monthly.md",title:"February 2024",description:"This is the first joint report of the \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects, which summarizes the teams' progress since January 2024.",date:"2024-02-26T12:28:21.000Z",formattedDate:"February 26, 2024",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:7.3,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"},{name:"Jean-Philippe Raynaud",title:"Software Engineering Lead",url:"https://github.com/jpraynaud",imageURL:"https://github.com/jpraynaud.png",key:"jpraynaud"},{name:"Sasha Bogicevic",title:"Senior Software Engineer",url:"https://github.com/v0d1ch",imageURL:"https://github.com/v0d1ch.png",key:"v0d1ch"}],frontMatter:{title:"February 2024",slug:"2024-02",authors:["ch1bo","jpraynaud","v0d1ch"],tags:["monthly"]},unlisted:!1,prevItem:{title:"March 2024",permalink:"/monthly/2024-03"},nextItem:{title:"January 2024",permalink:"/monthly/2024-01"}},h={authorsImageUrls:[void 0,void 0,void 0]},d=[{value:"Mithril",id:"mithril",level:2},{value:"Release and publication",id:"release-and-publication",level:4},{value:"Signing Cardano transactions proof of concept",id:"signing-cardano-transactions-proof-of-concept",level:3},{value:"Enhanced support for Conway and SanchoNet",id:"enhanced-support-for-conway-and-sanchonet",level:3},{value:"Hydra",id:"hydra",level:2},{value:"Notable updates",id:"notable-updates",level:4},{value:"Contest after fanout bug hunt",id:"contest-after-fanout-bug-hunt",level:3},{value:"Hydra explorer supporting multiple versions",id:"hydra-explorer-supporting-multiple-versions",level:3},{value:"Community",id:"community",level:2},{value:"TxPipe on Mithril",id:"txpipe-on-mithril",level:3},{value:"Ikigai auctions on Hydra",id:"ikigai-auctions-on-hydra",level:3},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"This is the first joint report of the \ud83d\udc32 Hydra and \ud83d\udee1 Mithril projects, which summarizes the teams' progress since January 2024."}),"\n",(0,i.jsx)(t.p,{children:"Previously, both teams had been releasing progress updates in different formats and intervals within their respective repositories:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Hydra ",(0,i.jsx)(t.a,{href:"https://hydra.family/head-protocol/monthly",children:"monthly reports"})]}),"\n",(0,i.jsxs)(t.li,{children:["Mithril ",(0,i.jsx)(t.a,{href:"https://mithril.network/doc/dev-blog/",children:"dev blog"})]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Both sites are created from the individual project repositories. However, it is not ideal to keep 'procedural' documents as part of the code base, since it requires special handling when building versioned, published documentation. For example, ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/blob/fad12fd7d967e5e8af4d8b832396e68bd8510e9a/.github/workflows/publish-docs.yaml#L87-L92",children:"this workflow"})," in the Hydra project which publishes to ",(0,i.jsx)(t.a,{href:"https://hydra.family",children:"https://hydra.family"})," required several attempts to work around how Docusaurus websites are built. Consequently, we introduced a ",(0,i.jsx)(t.a,{href:"https://github.com/cardano-scaling/website",children:"dedicated repository"})," that builds into a ",(0,i.jsx)(t.a,{href:"https://cardano-scaling.org",children:"website"}),". This not only helps keep the original product repositories clean of inherently dated information, but also serves as a new home for joint reports, announcements, or occasional articles."]}),"\n",(0,i.jsxs)(t.p,{children:["This monthly report serves as preparation for the monthly stakeholder review meeting (see ",(0,i.jsx)(t.a,{href:"https://docs.google.com/presentation/d/18buDs_TcMHgFAYjJt9GftQiEnVB3ubcoD3Djh3ovxSc/edit#slide=id.g1f87a7454a5_0_1392",children:"slides"})," and ",(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1WZ03vcpfxgYhGw91-L3QXVfyNwhdaCBY/view",children:"recording"}),"). At the meeting, the teams update stakeholders on recent developments and gather feedback on proposed plans."]}),"\n",(0,i.jsx)(t.h2,{id:"mithril",children:"Mithril"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/mithril/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-01-31..2024-02-29",children:"Issues and pull requests closed in February"})}),"\n",(0,i.jsx)(t.h4,{id:"release-and-publication",children:"Release and publication"}),"\n",(0,i.jsxs)(t.p,{children:["This month, the Mithril team ",(0,i.jsxs)(t.a,{href:"https://github.com/input-output-hk/mithril/releases/tag/2408.0",children:["released distribution ",(0,i.jsx)(t.code,{children:"2408.0"})]})," and published two blog posts:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://mithril.network/doc/dev-blog/2024/02/08/testing-sanchonet-network-available",children:"Mithril SanchoNet network released"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://mithril.network/doc/dev-blog/",children:"Mithril client CLI output breaking change"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"signing-cardano-transactions-proof-of-concept",children:"Signing Cardano transactions proof of concept"}),"\n",(0,i.jsxs)(t.p,{children:["The team has been working on implementing a proof of concept of a new data type that will enable the certification of Cardano transactions within Mithril networks. Last month, the team extended the ",(0,i.jsx)(t.a,{href:"https://crates.io/crates/mithril-client",children:"Mithril client library"})," to support the certification of Cardano transactions. This month, the team have upgraded the ",(0,i.jsx)(t.a,{href:"https://mithril.network/doc/manual/developer-docs/nodes/mithril-client/",children:"client CLI"})," and introduced a new ",(0,i.jsx)(t.code,{children:"cardano-transaction"})," command that can list snapshots and certify a list of Cardano transactions. Additionally, they have implemented the same API surface on the ",(0,i.jsx)(t.a,{href:"https://www.npmjs.com/package/@mithril-dev/mithril-client-wasm",children:"WASM client"})," that now supports transaction certification in the browser."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(7395).A+"",width:"1328",height:"709"})}),"\n",(0,i.jsx)(t.h3,{id:"enhanced-support-for-conway-and-sanchonet",children:"Enhanced support for Conway and SanchoNet"}),"\n",(0,i.jsxs)(t.p,{children:["The team has conducted thorough testing on the upcoming Conway era and are confident that Mithril networks will transition smoothly to this new era. Additionally, the team have released a new ",(0,i.jsx)(t.a,{href:"https://mithril.network/explorer/?aggregator=https%3A%2F%2Faggregator.testing-sanchonet.api.mithril.network%2Faggregator",children:(0,i.jsx)(t.code,{children:"testing-sanchonet"})})," network that has been opened to SPOs to enable collaborative testing of the upcoming and experimental features (eg the aforementioned signature of the Cardano transactions)."]}),"\n",(0,i.jsx)(t.h2,{id:"hydra",children:"Hydra"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2024-01-31..2024-02-29",children:"Issues and pull requests closed in February"})}),"\n",(0,i.jsxs)(t.p,{children:["This month, the Hydra project ",(0,i.jsx)(t.a,{href:"https://github.com/orgs/input-output-hk/projects/21/views/7",children:"roadmap"})," underwent a few changes:"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.img,{alt:"The roadmap with features and ideas",src:n(3297).A+"",width:"1165",height:"857"})," ",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"The latest roadmap with features and ideas"})})]}),"\n",(0,i.jsx)(t.h4,{id:"notable-updates",children:"Notable updates"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["New: ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1213",children:"Drop support for JSON encoded transactions #1213"})," due to breaking changes when upgrading ",(0,i.jsx)(t.code,{children:"cardano-node"})," and ",(0,i.jsx)(t.code,{children:"cardano-ledger"})," versions."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1257",children:"Smoke tests on SanchoNet #1257"})," took longer than expected, revealing issues, but seeing smoke tests run on SanchoNet makes the team confident the ",(0,i.jsx)(t.code,{children:"hydra-node"})," is ready for the Conway hard fork"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/696",children:"Build and deploy a Hydra heads explorer #696"})," is around 50% complete. Data is available for ",(0,i.jsx)(t.code,{children:"sanchonet"})," at ",(0,i.jsx)(t.a,{href:"http://explorer.hydra.family/heads",children:"http://explorer.hydra.family/heads"})," but a user interface is still needed."]}),"\n",(0,i.jsxs)(t.li,{children:["Started working on ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/199",children:"Incremental commit #199"})," as the UX will be similar to ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1057",children:"Incremental decommit #1057"}),". Implementing both features off-chain allows early adoption while improving on-chain security."]}),"\n",(0,i.jsxs)(t.li,{children:["Added the ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1325",children:"Streaming plugins #1325"})," feature to cover SundaeLab's work on their Catalyst proposal"]}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"contest-after-fanout-bug-hunt",children:"Contest after fanout bug hunt"}),"\n",(0,i.jsxs)(t.p,{children:["While working on ",(0,i.jsx)(t.a,{href:"https://github.com/abailly-iohk/hydra-chess",children:"hydra-chess"}),", the team encountered a ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1260",children:"bug"})," in the Hydra node. In the two-party Hydra Head, nobody was able to perform a ",(0,i.jsx)(t.code,{children:"Fanout"}),". This happened because one of the nodes was in the initial ",(0,i.jsx)(t.code,{children:"Snapshot"})," state and missed the request for a new ",(0,i.jsx)(t.code,{children:"Snapshot"}),", while the other node already had one confirmed ",(0,i.jsx)(t.code,{children:"Snapshot"})," locally."]}),"\n",(0,i.jsxs)(t.p,{children:["When the ",(0,i.jsx)(t.code,{children:"Close"})," was posted, the Head was closed with the initial ",(0,i.jsx)(t.code,{children:"Snapshot"})," and then contested by the node that saw a newer ",(0,i.jsx)(t.code,{children:"Snapshot"}),". After the contest, the team observed a strange behavior where both nodes could not ",(0,i.jsx)(t.code,{children:"Fanout"}),". We expected this failure in the node that only had the initial ",(0,i.jsx)(t.code,{children:"Snapshot"})," since it did not have the correct ",(0,i.jsx)(t.code,{children:"UTxO"})," locally to ",(0,i.jsx)(t.code,{children:"Fanout"}),". However, the failure in the other node with the newer ",(0,i.jsx)(t.code,{children:"Snapshot"})," should not have happened."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Fanout after contest bug sketching",src:n(4315).A+"",width:"1473",height:"871"})}),"\n",(0,i.jsxs)(t.p,{children:["While reviewing the code, the team discovered that the ",(0,i.jsx)(t.code,{children:"Contest"})," observation was not extending the deadline after the contestation was made. As a result, the ",(0,i.jsx)(t.code,{children:"Fanout"})," transaction was invalid because the validator checks that the ",(0,i.jsx)(t.code,{children:"Fanout"})," transaction's lower validity bound is higher than the deadline to contest. This check ensures that one can only fan out after the contestation period is over."]}),"\n",(0,i.jsx)(t.p,{children:"Before fixing this bug, the team tried reproducing it using the MBT (Model Based Tests) framework, one of the tools in the test suite. However, to do that, they needed to complete modeling the entire head lifecycle and the specific scenario they observed in real life and arbitrary actions in all head states did not reveal this bug."}),"\n",(0,i.jsx)(t.p,{children:"After also improving the framework itself to correctly validate transactions and a fix for simulating rollbacks, the team was able to fix the bug easily. However, it proves that being able to reproduce a bug is not only improving the code, but also allowed the team to gain knowledge and improve their test suites."}),"\n",(0,i.jsx)(t.h3,{id:"hydra-explorer-supporting-multiple-versions",children:"Hydra explorer supporting multiple versions"}),"\n",(0,i.jsxs)(t.p,{children:["This month, the team deployed the ",(0,i.jsx)(t.code,{children:"hydra-explorer"})," to serve data under ",(0,i.jsx)(t.a,{href:"http://explorer.hydra.family/heads",children:"http://explorer.hydra.family/heads"}),". Alongside this, they upgraded the Hydra scripts and switched to the latest pre-release version of ",(0,i.jsx)(t.code,{children:"cardano-node"})," for Conway, and the system is currently running on the ",(0,i.jsx)(t.code,{children:"sanchonet"})," network."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:n(4637).A+"",width:"750",height:"542"})}),"\n",(0,i.jsxs)(t.p,{children:["The Hydra explorer currently has the capability to support only one version on a single network. The reason for this limitation is that the Hydra scripts are compiled into two binaries- ",(0,i.jsx)(t.code,{children:"hydra-node"})," and ",(0,i.jsx)(t.code,{children:"hydra-chain-observer"})," - and the observer is connected to a single ",(0,i.jsx)(t.code,{children:"cardano-node"})," that operates as a client on one network."]}),"\n",(0,i.jsxs)(t.p,{children:["To support multiple versions of the protocol ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1282",children:"#1282"}),", the team needs to compile the scripts of each version into individual chain observer binaries. These binaries can then communicate with the ",(0,i.jsx)(t.code,{children:"hydra-explorer"})," components through an API. While Plutus validators change with any modification (thus affecting their hashes and addresses), this API can serve as an integration point that the team can support through multiple versions of the protocol."]}),"\n",(0,i.jsx)(t.h2,{id:"community",children:"Community"}),"\n",(0,i.jsx)(t.p,{children:"Both projects saw community contributions this month:"}),"\n",(0,i.jsx)(t.h3,{id:"txpipe-on-mithril",children:"TxPipe on Mithril"}),"\n",(0,i.jsxs)(t.p,{children:["The TxPipe team has kept working on the implementation of the ",(0,i.jsx)(t.code,{children:"Pallas Chain Observer"})," for Mithril nodes and has contributed to retrieving the stake distribution and Mithril era markers (stored in the UTxOs of the chain) directly from the Cardano node with mini-protocols."]}),"\n",(0,i.jsx)(t.h3,{id:"ikigai-auctions-on-hydra",children:"Ikigai auctions on Hydra"}),"\n",(0,i.jsxs)(t.p,{children:["As it also was briefly shown in the review meeting, Ikigai continued work on ",(0,i.jsx)(t.a,{href:"/monthly/2023-06#hydra-for-auctions-contributions-and-closing-of-project",children:"Hydra for Auctions"})," in their Catalyst-backed project. Their use case is about starting auctions on the Cardano mainnet, but then collecting bids off-chain and only committing the final result on-chain. This is a perfect use case for Hydra, as it allows for a large number of off-chain transactions to be processed in parallel and then committed to the blockchain in a single transaction."]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["We held the monthly review meeting for February 2024 on 2024-02-26 via Google Meet, presenting these ",(0,i.jsx)(t.a,{href:"https://docs.google.com/presentation/d/18buDs_TcMHgFAYjJt9GftQiEnVB3ubcoD3Djh3ovxSc/edit#slide=id.g1f87a7454a5_0_1392",children:"slides"})," and this ",(0,i.jsx)(t.a,{href:"https://drive.google.com/file/d/1WZ03vcpfxgYhGw91-L3QXVfyNwhdaCBY/view",children:"recording"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["This month, both projects focused on preparing for Conway and the upcoming hard fork combinator event. Preparations for the hard fork made the ",(0,i.jsx)(t.code,{children:"cardano-node"})," a moving target, but the teams believe that early integration is key. Unexpected issues popped up in both projects, but they were able to address them."]}),"\n",(0,i.jsxs)(t.p,{children:["New feature development is progressing well, with Mithril's transaction signing now available to early adopters. This feature opens up the possibility of making ",(0,i.jsx)(t.code,{children:"hydra-node"}),"s more lightweight, as they won't need to rely on a single third party for trusted chain data. Instead, they can verify on the client (the Hydra node) using Mithril certificates. Additionally, Hydra's incremental decommit feature is in progress. While there's still significant work to be done on the on-chain parts, the teams have already implemented the off-chain workflow for incremental commits. Making both features available for users to try out will help validate the API changes. However, this cannot be released to mainnet without completing the required on-chain security work. During the review meeting, the teams sought feedback on a potential simplification of the Hydra on-chain protocol to have 'directly open' heads. Any thoughts or feedback on this fresh ",(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/hydra/issues/1329",children:"feature idea\n#1329"})," would be appreciated."]}),"\n",(0,i.jsx)(t.p,{children:"In general, if you read this far we would like to hear from you, dear reader, on any of our communication channels on Discord or a shout out on twitter. Maybe along with some feedback on the new, common website and the joint monthly report format? \ud83d\ude4f"}),"\n",(0,i.jsx)(t.p,{children:"We are looking forward to the next month and when it happens, the Conway hard-fork on the first public testnets (no date yet) when \ud83d\udee1 Mithril serving certificates and \ud83d\udc32 Hydra heads remaining open throughout."})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},4637:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-02-explorer-c62da5d26af0f2e492d8599f0622b6be.png"},4315:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-02-fanout-after-contest-e156eac8175aaf0c1cfc5cce266d50d3.png"},3297:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-02-hydra-roadmap-ac47b5ab937793764b6a7a35508db223.jpg"},7395:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/2024-02-mithril-cardano-tx-d3db0ef017e592f2b056ba42b45bc73d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(6540);const o={},a=i.createContext(o);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);