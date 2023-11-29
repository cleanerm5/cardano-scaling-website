---
title: November 2023
slug: 2023-11
authors: [ch1bo]
tags: [monthly]
---

This report summarizes the work on Hydra since October 2023. It serves as
preparation for the monthly review meeting (see [slides][slides] and
[recording][recording]), where the team updates project stakeholders on recent
developments to gather their feedback on proposed plans.

## Roadmap

This month, several items were restructured on the project
[roadmap](https://github.com/orgs/input-output-hk/projects/21/views/7):

![The roadmap with features and ideas](./img/2023-11-roadmap.jpg) <small><center>The latest roadmap with features and ideas</center></small>

#### Notable updates

- Release of version `0.14.0` imminent as most of the [stateless chain
  observation #1096](https://github.com/input-output-hk/hydra/issues/1096)
  feature is done and only some internal refactoring missing.

- Refined user submitted feature idea on supporting extended keys
  [#1141](https://github.com/input-output-hk/hydra/issues/1141). The purpose
  (why?) of this item is clear now and work can be started (it's not a priority
  still though).

- Two new items were created to improve developer experience of the [hydra build
  toolchain #1146](https://github.com/input-output-hk/hydra/issues/1146) and a
  follow-up on things learned by `hydra-poll` to create a full end-to-end
  example of a [2-player game in a hydra head
  #1098](https://github.com/input-output-hk/hydra/issues/1098).

- There was already an item about reacting to mainchain parameter changes on the
  roadmap, which included not only protocol parameter updates, but also
  hard-fork events. With the upcoming hard-fork into `Conway`, we split off the
  changes needed to navigate such hard-fork and concretized it:

  + [Conway support #1177](https://github.com/input-output-hk/hydra/issues/1177) will make the `hydra-node` support Conway and allow users to keep heads open across the hard-fork.
  + [Drop Babbage support #1178](https://github.com/input-output-hk/hydra/issues/1178) will eventually make us drop support for the Babbage era and retain maintainability.
  + The original item is only about [reacting to protocol parameter changes #195](https://github.com/input-output-hk/hydra/issues/195) now.

- Substantial updates on the design of the next major feature [Incremental decommit #1057](https://github.com/input-output-hk/hydra/issues/1057) and work can be started on this item.

- In general we prepared prepared multiple of these 💭 idea items and many of them will turn into 💬 features soon.

## Hydra development

[Issues and pull requests closed since the last
report](https://github.com/input-output-hk/hydra/issues?q=is%3Aclosed+sort%3Aupdated-desc+closed%3A2023-10-31..2023-11-30)

This month, the team worked on the following:

### MeshJS + Hydra

At the beginning of month we attended the Cardano Summit in Dubai where we held
the _Hydra MasterClass_ workshop. There we also presented the Hydra-Poll dApp
which is using MeshJS to build Hydra transactions on the frontend.

We collaborated with the MeshJS team closely and as the outcome of this work
they added some Hydra specific features to the MeshJS SDK. There is a nice low
level [API](https://meshjs.dev/apis/transaction/builderExample) for building
custom transactions which is pretty similar to what `cardano-cli` does.

Now you can use `isHydra` field which you can pass to this API which then uses
another set of protocol paramters suitable for Hydra (eg. usually in Hydra we
want to have zeroed transaction fees, reduce script execution units etc.).

Big thanks to the MeshJS team on giving us much needed support! They were
presenting these changes in our monthy review meeting so make sure to watch the
[recording](https://drive.google.com/file/d/1-iv8IveUzA2KrJV_Kqrgx4ts05Ow0zjM).



### Stateless chain observation

TODO sebastian

### Incremental decommit protocol design

TODO sebastian

### Rendered specification

TODO sebastian

## Community update

TODO

## Conclusion

The monthly review meeting for November 2023 was held on 2023-11-27 via Google
Meet with these [slides][slides] and the [recording][recording].

TODO

[slides]: https://docs.google.com/presentation/d/1JA_frlOXVrrBeaBGUnIq3U9cclrfU1A2cZR9B2AeVJg
[recording]: https://drive.google.com/file/d/1-iv8IveUzA2KrJV_Kqrgx4ts05Ow0zjM