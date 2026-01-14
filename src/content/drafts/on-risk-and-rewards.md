---
title: 'On Risk and Rewards'
description: ''
heroImage: "/blog/on-risk-and-rewards/hero.png"
keywords: [ ]
pubDate: 'Jan 15 2026'
---

This is a very personal writeup in the line of [the 8-hour myth](https://antropia.studio/blog/the-8-hour-myth/) where I
try to understand a concept that looks very simple at surface level but that in reality has a ton of nuances and is
often very emotionally charged, making it hard to grasp and discuss.

Having said that, or maybe because of that, this article lures me every time I start talking about it with friends and
colleagues. Today's topic is **risk**.

To start talking about it I need first to set some common ground so I'll start with a boring section just to make sure
we all are on the same page.

## Definitions

Here are some dictionary-level definitions that will help us build an intuition at base level of what **risk** is. I
only include here the definitions closer to the economics world to keep things focused.

- **Wikipedia**: Risk is the possibility of something bad happening, comprising a level of uncertainty about the effects
  and implications of an activity, particularly negative and undesirable consequences.
- **Cambridge**: the possibility of something bad happening.
- **Merriam-Webster**: the chance that an investment (such as a stock or commodity) will lose value.
- **ISO 31000**: effect of uncertainty on objectives.

> [!NOTE] On positive outcomes
> I included **ISO 31000** for completeness but it's the only definition here that gives room for positive outcomes.
> Given it's the only source that does this, we will stick to the definition that implies negative outcomes only.

I think we get the idea. We all have taken risks, to a greater or lesser extent, when it comes to our personal lives. In
fact, every decision we take entails a risk. Examples of them are:

- Switching jobs.
- Moving to another city/country/neighbourhood/house.
- Meeting new people.
- Marrying someone and/or divorcing someone.
- Purchasing something from Kickstarter.
- Driving.
- Doing sport.

All of these come with one or many risks we evaluate before making a decision:

- The possibility of not liking your new life.
- Not adapting to the new situation.
- Not being able to afford the new cost of living.
- Missing your friends and family.
- Purchasing something you will never use.
- Getting a ticket.
- Injuries.

In this non-exhaustive list of risks-inducing actions, and potential consequences, there are some concepts that
complement the meaning of risk: **uncertainty**, **impact** and **expectations**.

I apologise for the crude oversimplification here but, for me, it helps visualising how we take actions as if it were an
_if-else_ statement representing how we evaluate different situations. This includes also some of these related concepts
and how they interact with each other:

```js
function act(
  state_of_the_world,
  action
) {
  /**
   * We can have some idea what the result of a prediction
   * will be but we will never be a 100% sure
   */
  const {
    good_outcome, // othertimes called reward
    bad_outcome,  // this is risk
    uncertainty   // and this a probability describing how possible we think the good outcome is
  } = predict(
    state_of_the_world,
    action
  )

  /**
   * We then put the simulation in a mental balance and try to
   * decide if running the action in the real world is worth it
   */
  const is_it_worth_it = evaluate(
    good_outcome,
    bad_outcome,
    uncertainty
  )

  if (is_it_worth_it) {
    take(action)
  }
}
```

When we want to try our luck in some scenario, we'd mentally imagine (i.e. *predict*) as if we did something (the
*action*), and we'd get a probability of the expected outcome to happen. Then we'd weight the *impact* of the reward,
the risk, and the different probabilities in the function. The result of this calculation will give us insight on what
to do next. Keep in mind we do this all the time. The thing is we do it so naturally we don't even think about it
explicitly in most situations.

Sometimes the risk (the bad outcome) is us just wasting time making all these calculations and worrying about it for no
reason, and sometimes it's something more. The important take is that taking a risk always comes with an **expectation
** (a reward or a loss), their associated **impact**, and a pinch of **uncertainty** (that we usually express as a
probability).

## Risk at work

Now that we have gone through some definitions and connected some dots, it's time to apply it all to a specific context:
**work**. I'm focusing on tech because that's my *salsa* and because there are some specifics here and there (like
stocks, investment rounds, etc) that make this market different.

I'll start by describing here what I initially thought about risk at work, before truly surfacing the question and
thinking "harder" about it. Here is a list of things I believed, and probably you do as well:

- Founders take a lot of risk by spending months, if not years, building a product or a company, most of the time
  without a salary, not knowing if they will get anything in return.
- The high risk of founders is usually compensated with shares for three main reasons:
  1. To reward the time spent until the company gets money somehow (e.g. investment rounds, selling the company, going
     public, finding product market fit, etc.).
  2. To incentivise founders to work in benefit of the company (i.e. *to align incentives*).
  3. Because there is usually no money to pay when a company starts. Even when the company is running and in good
     health, it's a great way to reduce cash spending.
- Employees get decreasing stocks the later they join, and/or the lower their position in the company hierarchy. Reason
  2 and 3 still apply, but reason 1 slowly mutates to "attract and retain talent" rather than purely rewarding risk.
- There are different types of stock: *common stock*, *preferred stock*, *stock options*, *RSUs*, etc.
- Employee stock usually is of "*worse quality*" meaning they can only be exchanged or used under certain circumstances
  and have lower priority than other stock.
- Most companies don't make it through.
- Compensation in tech companies is usually composed by salary + equity. Salary is safe, can buy you things. Equity is
  air, until (or should I say *if*) a specific event happens (e.g. stock repurchase, company is sold, company goes
  public, etc.), then it's money with a multiplier.

Some of these are plainly naive, products of my inexperience, others I still believe, and others are just a description
of the current system. The issue with these beliefs to me is that they leave us with no room for imagination, no
possible improvement. As with the 8-hour workday, **it is what it is**.

But is it truly a fair system? Can't we think of anything better? In the next section, we will dissect some of these
points and evaluate them to try to find a better understanding and maybe find fairer ways to compensate people.

## Dissecting risk

Before going into the different risks we all face at work, I'd like to acknowledge that these lists can't be exhaustive
because risk is highly contextual. For example, income instability can have an effect on one's personal relationships,
mental wellbeing, and even views of the world.

With that being said, let's first focus on the different risks a founder is exposed to:

- **Financial risk**: Capital invested in the venture can be lost.
- **Income instability**: There might be long periods without stable (or any) income.
- **Reputational risk**: Personal credibility and image can take a hit if the project fails.
- **Role/job ossification**: It's harder to replace the founder than it is to replace a worker.
- **Legal/liability exposure**: Personal guarantees, lawsuits.

Now it would be naive to think the only ones taking risks here are the founders of a company. Workers also take a risk
when working for a company, for example:

- **Job insecurity**: The possibility of being fired at any moment. Sometimes for reasons out of one's control.
- **Income loss**: Workers are <mark style="background: #FFB8EBA6;">generally</mark> paid less than founders, given the
  company thrives, not something to be overlooked.
- **Loss of autonomy**: Albeit having some agency depending on the company, in general workers do not decide how to
  spend their time while working.
- **Role stagnation**: Workers are hired for their current or prospective skills. Once a worker has a clear role
  assigned, changing hats is usually frowned upon or not allowed at all.
- **Skill depreciation**: Working on proprietary tech that doesn't transfer to other domains.
- **Geographic lock-in**: Relocating for a job that might disappear.
- **Information asymmetry**: Workers often don't know the company's true financial health, runway, or likelihood of
  exit. They make career decisions based on incomplete information.
- **Equity illiquidity**: Stock options may never be exercisable, making the compensation component of salary+equity
  largely theoretical.

> [!NOTE] On generally
> I struggled to include here the word *generally* or not, I ended up keeping it there for the same reason I don't like
> using the words "never" or "always": I like to think of the world, or my view of the world, as something that is
*always* (ha!) changing.

Here is an interesting first insight: some risks are shared, specifically, those that affect the company itself:

> [!NOTE] Impact is not equally shared
> The risk is shared, but the impact of that risk in each person is different and, among other things, it depends on the
> role within the company.

- **Continuity**: Companies shut down all the time for whatever reason, and that affects both workers and founders.
- **Reputation**: People working in/for a company somehow attach their public image to the company.
- **Opportunity cost**: The possibility to let go of other professional opportunities.

There is an interesting point to be made here: as opposed to founders, workers don't have much to say when these risks
are part of the equation. They can convince/influence to the best of their ability, but they do so from a powerless
position.

We can continue talking about risks and expectations here, but there is one important concept we already mentioned that
plays a huge role here: **impact**.

According to data founders and entrepreneurs have stronger safety nets [^1] [^2] [^3]. This is not surprising, people
with financial stability can overcome the survival instinct and take risks that others simply cannot afford to consider.
This is not to say that all founders come from privilege, many don't, and their risk is very real. But when we look at
the aggregate data we can see a pattern: the typical founder is better positioned to absorb failure than the typical
worker.

And this all matters when we bring back **impact** into the picture. A founder who loses their company faces a painful
setback, nobody denies that. However, research suggests that for many, the material consequences are softened by the
same circumstances that enabled them to start. Meanwhile, studies on job loss paint a grimmer picture for workers:
long-term earnings losses, declines in mental and physical health, family disruption, and in some cases, lasting
psychological harm.

The risks may look similar on paper, but the aftermath can be radically different. This reframes the usual narrative.
Founders are often compensated generously for "*taking on more risk*", but if we account for impact, the playing field
seems different than what we assume. What remains uneven is the reward.

## On reward

Even though risk appears to be shared, workers bear disproportionate *impact* from that risk while receiving
disproportionately less *reward*. At the same time, workers have less (sometimes zero) agency on what to do with the
company and how to spend their time there.

A this point my intuition is screaming at me that there is a contradiction here somewhere. Let's recap and dig into some
of the nuances from this entire system to see if we can find a fairer (therefore better) way to compensate work and
risks.


> [!NOTE] Generalizing
> I don't want to repeat myself here but this is a generalisation. "But my company let everyone participate in
> company-wide decision", that's amazing, but unfortunately, not the norm.

Here is a list of the statements we are working on here:

- Both owners and workers face risks in their work-life. Some of them are different by nature, but also in their impact.
  More importantly, some of them are shared by both sides (i.e. *company risks*).
- Owners have more (sometimes all) levers to deal with the direction of a company. They are the ones deciding on
  *company risks* that affect all, owners and workers.
- Owners are better compensated by their work, or by having the idea, or by risking capital when uncertainty is really
  high (and this is praiseworthy!).
- When things go fantastic, owners see their compensation grow exponentially. Workers compensation not that much. The
  difference here is orders of magnitude, not that there aren't bonuses.

> [!NOTE] On blame
> I want to be clear, I'm thinking in [systems](https://en.wikipedia.org/wiki/Systems_science) here, this is not about
> villains and victims. The rules of this system has existed for centuries. My goal isn't to assign blame but to ask
> whether the system itself makes sense given what we now know about how risk and reward actually distribute.

We spend a lot of energy trying to make workers feel like owners without actually making them owners. Stock options,
equity packages, bonuses tied to company performance, mission statements, OKRs cascading down from leadership. These
tools exist because we recognise that aligned workers perform better. But they're workarounds. Attempts to simulate
ownership through incentives rather than just... ownership.

What if we removed the distinction entirely? Companies owned by workers, by default. Not as a perk or a retention tool,
but as the foundational structure.

This doesn't erase the founder's contribution. Starting something from nothing, often without income, under high
uncertainty, deserves fair compensation. Generous, even. The specific formula we find to compensate that is up to the
company but a simple one would be something like: time invested multiplied by a meaningful rate, and a risk
premium/multiplier on top. But at some point, and here is the interesting part, that debt gets paid. From then on, the
company belongs to everyone who makes it work. Because execution, both strategic and tactical, is just as essential as
the initial idea. Neither works without the other.

This shift in ownership naturally extends to other aspects of the company. Agency: all workers have a say in how the
company is run. Profit sharing: everyone who makes profit possible participates in it. Accountability: leadership can be
questioned, and changed, by those affected by their decisions. Compensation itself: set transparently, with input from
all.

A fair warning here: democracy doesn't mean consensus. It doesn't mean endless meetings or decisions by committee.
Frederic Laloux's *Reinventing Organizations* explores this distinction well, small groups can be trusted to make
decisions in their domain, and those groups can be formed and dissolved as needed. What emerges isn't slow bureaucracy
but something closer to trust: transparency, distributed authority, and yes, genuine alignment. Not the manufactured
kind.

This model I'm describing isn't a thought experiment. It already exists, and has for over a century. They're called
cooperatives, businesses owned and governed by the people who work in them. They come with their own set of problems and
challenges, but if we want to build a fairer work-life, I think this is the way to do it.

## Counter-arguments

To finish this post, I'd like to address some counterarguments I've encountered when discussing these ideas with
colleagues. Not to dismiss them, but to think through them honestly.

**"Workers trade risk for stability"**

This is probably the most common response, and on the surface it makes sense. Workers get a predictable salary and
founders get equity upside in exchange for uncertainty. A fair trade, supposedly.

But as we've seen throughout this article, the stability side of that bargain is shakier than it appears. Workers face
job insecurity, layoffs, company shutdowns. Risks they are exposed to that are often overlooked, and that they have
little power to influence. And when those risks materialise, the impact falls harder on workers than on founders who
often have stronger safety nets. The "stability" being traded for is, in many cases, an illusion. Both sides are exposed
to risk. Only one side gets to decide how to navigate it.

**"Founders deserve more because they had the idea"**

Ideas matter. No one is discussing it. There needs to be a creative spark to start a company, or the conviction to
pursue it. But an idea without execution is just a thought, just as execution without an idea is wasted time.

The question isn't whether founders deserve compensation for their contribution. They do, no doubt about it. The
question is whether that contribution justifies permanent, exponentially-growing rewards while everyone else's
contribution is compensated linearly. I'm not sure it does.

**"Workers can leave anytime"**

True. But switching jobs has real costs: time spent interviewing, potential relocation, lost equity that hasn't vested,
the risk of jumping to somewhere worse. It's not a frictionless market.

And if we're using "*you can leave*" as the answer to structural imbalances, that argument applies both ways. Founders
with safety nets can also step back, hire a CEO, or become workers themselves. Mobility isn't unique to one side.

---

I find these counterarguments interesting because they often frame the relationship as inherently adversarial: workers
versus founders/owners. As if improving conditions for one must come at the expense of the other. But that's not what I
see, that framing misses the point entirely. Cooperatives don't eliminate founders or devalue their contribution. They
simply ask: once the initial risk is fairly compensated, why should ownership and decision-making remain concentrated
indefinitely?

It's not about tearing down. It's about building something that works better for everyone involved.

[^1]: https://qz.com/455109/entrepreneurs-dont-have-a-special-gene-for-risk-they-come-from-families-with-money

[^2]: https://fortune.com/2015/07/17/entrepreneurs-family-money/https://fortune.com/2015/07/17/entrepreneurs-family-money/

[^3]: https://www.mckinsey.com/featured-insights/diversity-and-inclusion/underestimated-start-up-founders-the-untapped-opportunity
