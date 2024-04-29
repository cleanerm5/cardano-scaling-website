"use strict";(self.webpackChunkcardano_scaling_website=self.webpackChunkcardano_scaling_website||[]).push([[7706],{6640:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=t(4848),s=t(8453);const o={title:"September 2023",slug:"2023-09",authors:["ch1bo"],tags:["monthly"]},a=void 0,r={permalink:"/monthly/2023-09",editUrl:"https://github.com/cardano-scaling/website/tree/master/monthly/2023-09-monthly.md",source:"@site/monthly/2023-09-monthly.md",title:"September 2023",description:"This report summarizes the work on Hydra since August 2023. It serves as",date:"2023-09-29T07:35:24.000Z",formattedDate:"September 29, 2023",tags:[{label:"monthly",permalink:"/monthly/tags/monthly"}],readingTime:8.77,hasTruncateMarker:!1,authors:[{name:"Sebastian Nagel",title:"Software Engineering Lead",url:"https://github.com/ch1bo",imageURL:"https://github.com/ch1bo.png",key:"ch1bo"}],frontMatter:{title:"September 2023",slug:"2023-09",authors:["ch1bo"],tags:["monthly"]},unlisted:!1,prevItem:{title:"October 2023",permalink:"/monthly/2023-10"},nextItem:{title:"August 2023",permalink:"/monthly/2023-08"}},h={authorsImageUrls:[void 0]},d=[{value:"Roadmap",id:"roadmap",level:2},{value:"Notable updates",id:"notable-updates",level:4},{value:"Cardano Scaling workshop in Nantes, France",id:"cardano-scaling-workshop-in-nantes-france",level:2},{value:"Aiken validator experiment",id:"aiken-validator-experiment",level:3},{value:"Shallow cardano-node experiment",id:"shallow-cardano-node-experiment",level:3},{value:"Other topics",id:"other-topics",level:3},{value:"Hydra development",id:"hydra-development",level:2},{value:"Network resilience to disconnects #188",id:"network-resilience-to-disconnects-188",level:4},{value:"Incremental commits and decommits #199",id:"incremental-commits-and-decommits-199",level:4},{value:"Refactored chain state #1049",id:"refactored-chain-state-1049",level:4},{value:"Community",id:"community",level:2},{value:"Open source contributions",id:"open-source-contributions",level:4},{value:"Current scaling use cases being tracked",id:"current-scaling-use-cases-being-tracked",level:4},{value:"Hypix",id:"hypix",level:5},{value:"Book.io",id:"bookio",level:5},{value:"Midnight",id:"midnight",level:5},{value:"SingularityNet",id:"singularitynet",level:5},{value:"SundaeLabs",id:"sundaelabs",level:5},{value:"Emurgo",id:"emurgo",level:5},{value:"Conclusion",id:"conclusion",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",img:"img",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This report summarizes the work on Hydra since August 2023. It serves as\npreparation for the monthly review meeting (see ",(0,i.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1YAWR4pz1gG2dwtGvm5KOAHtrjRcchPLUKhDA16u10ps",children:"slides"})," and\n",(0,i.jsx)(n.a,{href:"https://drive.google.com/file/d/1X8QnmG9gddR-t2V6F2oE7bYCYAEs2RPe/view",children:"recording"}),"), where the team updates project stakeholders on recent\ndevelopments to gather their feedback on proposed plans."]}),"\n",(0,i.jsx)(n.h2,{id:"roadmap",children:"Roadmap"}),"\n",(0,i.jsxs)(n.p,{children:["This month, the\n",(0,i.jsx)(n.a,{href:"https://github.com/orgs/input-output-hk/projects/21/views/7",children:"roadmap"})," has not\nchanged much as the team mostly clarified upcoming features."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"The roadmap with features and ideas",src:t(8792).A+"",width:"2913",height:"1133"})," ",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"The latest roadmap with features and ideas"})})]}),"\n",(0,i.jsx)(n.h4,{id:"notable-updates",children:"Notable updates"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added and completed ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/1043",children:"support for inline datums in commit API #1043"}),", which was reported by a user."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Current work on ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/188",children:"network resilience #188"})," yielded two new / follow-up items ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/1079",children:"#1079"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/1080",children:"#1080"}),". To minimize the 'scope creep' from this topic, the team has narrowed down the direct goal to improve the situation incrementally."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"When detailing the design of incremental de-/commits, the feature was also split in two. Each of the features would have a different impact on the user experience and relates to other ideas:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/199",children:"Incremental commit #199"})," is a bit more complicated, but paves the way for directly open heads and could make ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/699",children:"Always abortable head #699"})," redundant."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/1057",children:"Incremental decommit #1057"})," is fairly straightforward and can be evolved into 'partial fanouts', which solves similar problems as the ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/190",children:"split-fanout #190"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/370",children:"only signing closable snapshots #370"})," would address. Also, the ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/198",children:"optimistic head closure #198"})," feature is closely related to this item."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added a new feature to improve user journey of running the ",(0,i.jsx)(n.code,{children:"hydra-node"})," by ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/1064",children:"removing the command line defaults #1064"}),". This came out of prior ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/discussions/454",children:"idea discussion #454"})," which highlights the life cycle of ideas and features on the Hydra project."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cardano-scaling-workshop-in-nantes-france",children:"Cardano Scaling workshop in Nantes, France"}),"\n",(0,i.jsxs)(n.p,{children:["From 2023-09-12 to 2023-09-14, most of the ",(0,i.jsx)(n.em,{children:"Scaling Tribe"})," members, that is the two Hydra and Mithril teams, met for a three-day workshop in the beautiful French city of ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Nantes",children:"Nantes"}),". This workshop was run following the ",(0,i.jsx)(n.a,{href:"https://openspaceworld.org/wp2/",children:"Open Space"})," technique which makes room for every participant to experiment and focus on what's of interest for them at the time while being engaging for the whole team. Here is a selection of topics covered that were most relevant to Hydra."]}),"\n",(0,i.jsx)(n.h3,{id:"aiken-validator-experiment",children:"Aiken validator experiment"}),"\n",(0,i.jsxs)(n.p,{children:["As part of thw workshop, we explored how hard it would be to implement one of\nthe Hydra validators in ",(0,i.jsx)(n.code,{children:"aiken"}),". After roughly two hours of work we had a\n",(0,i.jsx)(n.code,{children:"hydra-node"})," running, tests passing and benchmarks of verifying one step in the\nHydra protocol using aiken."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"hydra-node"})," just uses the UPLC binary and its hash to construct\ntransactions, we could rely on the same interface, with the difference that the\nscript binary gets produced by ",(0,i.jsx)(n.code,{children:"aiken"}),". Aiken does produce a socalled blueprint\n",(0,i.jsx)(n.code,{children:"plutus.json"})," containing the contract. We staged that file into git and embedded\nit into a Haskell interface to be able to reference the compiled script as\n",(0,i.jsx)(n.code,{children:"SerialisedScript"})," from ",(0,i.jsx)(n.code,{children:"hydra-node"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Next, we ported the simplest contract we have, namely the\n",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/blob/ec6c7a2ab651462228475d0b34264e9a182c22bb/hydra-plutus/src/Hydra/Contract/Commit.hs",children:"Commit"}),"\nvalidator, ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/blob/4ec572511fc13a526b85efce3aac556ae5bd007c/hydra-plutus/validators/commit.ak",children:"to\nAiken"}),".\nThis was fairly straight-forward and we test were passing after some fiddling\nwith internal representations of data strctures (",(0,i.jsx)(n.code,{children:"plutus-tx"})," is encoding triples\nas ",(0,i.jsx)(n.code,{children:"Constr"})," data on-chain)."]}),"\n",(0,i.jsxs)(n.p,{children:["The results? A significant reduction in script size, cpu and memory usage on\n",(0,i.jsx)(n.code,{children:"collect"})," and ",(0,i.jsx)(n.code,{children:"abort"})," transactions - or in different words, ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/1072#issuecomment-1717644108",children:"doubling the\nsupported"}),"\nnumber of parties in a Head. \ud83c\udf89"]}),"\n",(0,i.jsx)(n.h3,{id:"shallow-cardano-node-experiment",children:"Shallow cardano-node experiment"}),"\n",(0,i.jsxs)(n.p,{children:["Running a hydra-node requires running a cardano-node, and running a\ncardano-node requires synchronisation with the chain and about 150\ngigabytes of data to be downloaded and verified, which is a\nsignificant barrier to quickly spin-up hydra-node and Hydra\nHeads. Given a Hydra node does not need to look at the history of the\nchain, a ",(0,i.jsx)(n.em,{children:"Shallow"})," cardano-node that can run without the full database\nof immutable files would be fine, assuming we can retrieve a recent\nstate of the chain with the same security guarantees than a fully\nsynchronised chain. This is exactly what Mithril can provide!"]}),"\n",(0,i.jsxs)(n.p,{children:["We ran a small experiment, trying to start a cardano-node manually\nremoving all but the last files from the ",(0,i.jsx)(n.em,{children:"immutable DB"})," and it worked\nas long as one does not query the node for a block too old in the\npast. This lead us to envision an improved user experience for\ninstalling and running a hydra-node, by packaging it with a\ncardano-node and a mithril-client to retrieve only the minimum needed\nstate and be able to start a fully functioning hydra-node in minutes."]}),"\n",(0,i.jsx)(n.h3,{id:"other-topics",children:"Other topics"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We continued working on ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/1078",children:"Kupo x\nHydra"}),"\nintegration, benefiting from the presence of Kupo's creator and\nformer Hydra team member, Matthias Benkort"]}),"\n",(0,i.jsx)(n.li,{children:'We brainstormed possible synergies between the Hydra and Mithril\nprojects, something that solidified into the desire to explore this\nconcept of "Shallow node" and its integration within Hydra'}),"\n",(0,i.jsxs)(n.li,{children:["We discussed and clarified our new ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/1088",children:"Security Vulnerability\nDisclosure\nPolicy"})]}),"\n",(0,i.jsxs)(n.li,{children:["Discussing the idea of a joint documentation effort, we realised the\nexisting documentation of both teams could be improved, for example\nby following a ",(0,i.jsx)(n.a,{href:"https://documentation.divio.com",children:"Standard documentation\nframework"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"hydra-development",children:"Hydra development"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-08-29..2023-09-29",children:"Issues and pull requests closed since the last\nreport"})}),"\n",(0,i.jsx)(n.p,{children:"This month, the team worked on the following:"}),"\n",(0,i.jsxs)(n.h4,{id:"network-resilience-to-disconnects-188",children:["Network resilience to disconnects ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/188",children:"#188"})]}),"\n",(0,i.jsxs)(n.p,{children:["If a Hydra node crashes, it can recover its state from disk thanks to the\n",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/1000",children:"event-sourced persistency"}),"\nmechanism in place. But if a peer inside the head sends messages while the node\nis down, these messages are lost for this node and this can well lead to the\nhead being stuck."]}),"\n",(0,i.jsx)(n.p,{children:"For instance, in the following picture, we see that if Bob was down when Alice\nacknowledged snapshot 10, then it will wait forever for this acknowledgement and\nwill refuse to move forward with the head, making it stuck."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"Head stuck because of lost message",src:t(2015).A+"",width:"854",height:"1082"})," ",(0,i.jsx)("small",{children:(0,i.jsx)("center",{children:"Head stuck because of lost message"})})]}),"\n",(0,i.jsx)(n.p,{children:"Hydra is designed to deal with non-cooperative peers in a very safe way:\nclose the head! And this situation could be generalized as a non cooperative\npeer situation. So the safe move is to just close the head."}),"\n",(0,i.jsx)(n.p,{children:"But practically speaking, closing the head every time a node restarts or a network\nconnection is interrupted can lead to an operations nightmare. So the question we're\nexploring is, can we distinguish between non cooperative peer or just transient\ncommunication issue?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/blob/master/docs/adr/2023-09-08_027-network-resilience.md",children:"ADR 27"}),"\ngives details about our current strategy"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/1074",children:"#1074"})," is a first implementation of this strategy"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/1080",children:"#1080"})," should specify the resulting network protocol so that others could implement compatible hydra nodes"]}),"\n"]}),"\n",(0,i.jsxs)(n.h4,{id:"incremental-commits-and-decommits-199",children:["Incremental commits and decommits ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/199",children:"#199"})]}),"\n",(0,i.jsxs)(n.p,{children:["In the beginning of this month, some progress on incremental commits and\ndecommits was made. An early\n",(0,i.jsx)(n.a,{href:"https://twitter.com/ch1bo_/status/1696067253089743289",children:"experiment"})," about the\noff-chain / node logic showed that we can re-use the ",(0,i.jsx)(n.code,{children:"/commit"})," validator and\nmotivated design work on the feature items."]}),"\n",(0,i.jsxs)(n.p,{children:["As mentioned above, the protocol extension was split into two items ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/199",children:"Incremental\ncommits #199"})," and\n[Incremental decommits"]}),"\n",(0,i.jsxs)(n.h1,{id:"1057-both-items-contain",children:[(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/issues/1057",children:"1057"}),". Both items contain"]}),"\n",(0,i.jsx)(n.p,{children:"high-level description, interaction outline and a first design of the on-chain\nvalidators which is currently getting discussed by the Hydra contributors and\nresearchers."}),"\n",(0,i.jsx)(n.p,{children:"Especially the incremental commit is not trivial as the interaction between\nlayer 1 and layer 2 is quite intricate. Observing a deposit on the Cardano\nmainchain may not be seen by all parties at the same time and this should not\nlock up the layer 2 process of transactions, while premature usage of committed\nfunds is to be avoided. On the other hand, each step in the protocol needs to be\nsecure in presence of an adversary and unlocking of committed funds must always\nbe possible."}),"\n",(0,i.jsx)(n.p,{children:"Once this validator design is clear, we can get started implementing one or both\nof the features to enable more flexible usage of the Hydra head protocol."}),"\n",(0,i.jsxs)(n.h4,{id:"refactored-chain-state-1049",children:["Refactored chain state ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/1049",children:"#1049"})]}),"\n",(0,i.jsx)(n.p,{children:"Following up the implementation of ADR#24, this marks the first enhancement in\na series of refinements, and our goal was optimization."}),"\n",(0,i.jsx)(n.p,{children:"We eliminated the need for recursive types in persisted chain states,\ntransitioning to a non-empty history model, preserving full backward\ncompatibility with existing systems."}),"\n",(0,i.jsx)(n.p,{children:"Importantly, throughout this refactor, we've kept the interface between the\nchain and logic layers entirely unchanged. This ensures a smooth transition and\nseamless integration with existing components."}),"\n",(0,i.jsx)(n.p,{children:"One of the notable advantages of this refactor is a reduced persistence\nfootprint. We now store individual points of the chain state, enhancing storage\nefficiency."}),"\n",(0,i.jsx)(n.h2,{id:"community",children:"Community"}),"\n",(0,i.jsx)(n.h4,{id:"open-source-contributions",children:"Open source contributions"}),"\n",(0,i.jsx)(n.p,{children:"This month some open source contributions were received, and the team was able to\ncontribute back to one project:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Hydra: Lightning network-style payments ",(0,i.jsx)(n.a,{href:"https://hydra.family/head-protocol/unstable/use-cases/payments/lighting-network-like-payments/",children:"use case"})," write-up by ",(0,i.jsx)(n.a,{href:"https://github.com/k-solutions",children:"@k-solutions"})]}),"\n",(0,i.jsxs)(n.li,{children:["Aiken: Started an emacs ",(0,i.jsx)(n.a,{href:"https://github.com/aiken-lang/aiken-mode",children:"aiken-mode"})," by @ch1bo (triggered by our experiments)"]}),"\n",(0,i.jsxs)(n.li,{children:["Hydra: Small ",(0,i.jsx)(n.a,{href:"https://github.com/input-output-hk/hydra/pull/1042",children:"fix in the docs"})," by ",(0,i.jsx)(n.a,{href:"http://github.com/caike",children:"@caike"})," (from RareEvo workshop)"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"current-scaling-use-cases-being-tracked",children:"Current scaling use cases being tracked"}),"\n",(0,i.jsx)(n.h5,{id:"hypix",children:"Hypix"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An update of hydraw with improved usability to stimulate user engagement"}),"\n",(0,i.jsx)(n.li,{children:"A showcase for Hydra, with an option to productize"}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"bookio",children:"Book.io"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A Web3 marketplace for tokenized digital eBooks and Audiobooks"}),"\n",(0,i.jsx)(n.li,{children:"Requires NFT minting and distribution at scale (for each copy/instance of a book)"}),"\n",(0,i.jsx)(n.li,{children:"Opened a discussion to investigate possible approaches to scaling their operations on Cardano"}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"midnight",children:"Midnight"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"DUST airdrop and side-chain operation"}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"singularitynet",children:"SingularityNet"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A Web3 marketplace for AI services offered and consumed through a pay-per-use API"}),"\n",(0,i.jsx)(n.li,{children:"Discussion ongoing about porting an existing Ethereum solution to Cardano"}),"\n",(0,i.jsx)(n.li,{children:"A chance to build on previous Hydra Pay efforts and upgrade the design to support unidirectional micropayments channels"}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"sundaelabs",children:"SundaeLabs"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Sundae proposed a ledger-only mode of Hydra, modelled on Gummiworm (the protocol used by SundaeSwap)"}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://cardano.ideascale.com/c/idea/102138",children:"https://cardano.ideascale.com/c/idea/102138"})}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"emurgo",children:"Emurgo"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Initial discussions to evaluate building a payments channel network using Hydra"}),"\n",(0,i.jsx)(n.li,{children:"Could leverage work done on Hydra Pay by Obsidian"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(n.p,{children:["The monthly review meeting for September 2023 was held on 2023-09-20 via Google\nMeet with these ",(0,i.jsx)(n.a,{href:"https://docs.google.com/presentation/d/1YAWR4pz1gG2dwtGvm5KOAHtrjRcchPLUKhDA16u10ps",children:"slides"})," and the ",(0,i.jsx)(n.a,{href:"https://drive.google.com/file/d/1X8QnmG9gddR-t2V6F2oE7bYCYAEs2RPe/view",children:"recording"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["This concludes yet another fully-packed month, this time not only\nfocusing on Hydra but also encompassing Mithril and the broader goal of\nsupporting Cardano's scaling effort to the best of our\nability. Meeting and working together in person demonstrated once\nmore, if this were needed, how much a small group of highly motivated\npeople can achieve. It also fueled our desire and consolidated our\nvision of being a small group of engineers with a clear ",(0,i.jsx)(n.em,{children:"purpose"}),',\nscratching our "own itch", contributing to the whatever projects and\ntools is needed and best for the job at hand, relentlessly prototyping\nand experimenting collectively to find the best solutions solving\nactual people\'s problems.']}),"\n",(0,i.jsx)(n.p,{children:"It is also worth mentioning that Catalyst's Fund 10 outcome shoudl\nresult in more contributions to Hydra (and hopefully Mithril!) in the\nnear term."})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},2015:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-09-head-stuck-e89cfe83fa8b153326d46f1910d00b9d.png"},8792:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/2023-09-roadmap-0db0b73e23619ca19806a878e3a37091.png"},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>r});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);