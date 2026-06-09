# Product Requirements Document
# 9–5 Body Reset

Version: 1.0
Date: 2026-06-09
Status: Draft
Author: Founder + Claude (/office-hours session)

---

## 1. Overview

9–5 Body Reset is a mobile app for office workers that delivers a structured neck and back recovery program timed to their actual workday. It detects gaps between calendar meetings and sends targeted desk recovery sessions — the right exercise, at the right moment, for the right duration.

The core insight: every competing product is **retrospective** (fires after you've been sitting too long). 9–5 Body Reset is **prospective** — it sees the gap in your calendar before you do and has a prescription ready. The interaction model is not "time to move!" but "you have 11 minutes before your 2pm — here's your neck reset."

---

## 2. Problem

Office workers with dense calendars experience chronic neck and back pain from sustained desk work. The barrier to recovery is not motivation — it is **decision cost**. To act on a gap between meetings, a person must:

1. Notice the gap exists
2. Calculate how much time they have
3. Decide what to do with it
4. Motivate themselves to start

Most people fail at step 1 or 3. Existing solutions (Wakeout, Apple Watch stand reminders, Stand Up!, YouTube routines) require the user to already have solved steps 1–3. This app removes all four steps and hands the user a ready action.

**What "I'll just do it myself" doesn't solve:** the decision cost. A calendar doesn't make you smarter about time — it removes the cognitive load of tracking it. This app does the same for body recovery.

---

## 3. Target User

**Primary:** Knowledge worker, 6–10 meetings/day, experiences neck or back pain from sustained desk work. Motivated to move but loses the daily decision-cost battle. Frictionless-path-dependent — they will act when the path is clear, and won't act when it requires decisions.

**Not the target:** People who have already built their own system (Fantastical blocks + Notion routine + YouTube playlist). They've solved the motivation problem; this app doesn't add value for them.

**The founder is the archetype.** The problem is lived, not hypothesized.

---

## 4. Core Differentiator

**Prospective scheduling beats retrospective nudging.**

| Competitor | Trigger | Type |
|---|---|---|
| Wakeout | Apple Health detects stillness | Retrospective |
| Apple Watch | 50 minutes elapsed | Retrospective |
| Stand Up! | Fixed interval timer | Retrospective |
| **9–5 Body Reset** | **Calendar gap detected in advance** | **Prospective** |

Wakeout could add calendar reads in one engineer's week. The moat is not the calendar integration itself — it is the interaction model built around prospective scheduling and the habit loop established as first mover.

---

## 5. Product Description

### 5.1 What the app does

1. User sets their work hours (free) or connects their calendar (Pro)
2. App detects gaps between meetings of ≥10 minutes
3. App subtracts a 2-minute buffer and fires a notification at gap start
4. Notification delivers a targeted exercise session calibrated to:
   - Duration of the gap
   - User's stated pain area (neck / back / both)
   - User's energy level for the day (Low / Normal / High)
5. User follows the session — 3 to 12 minutes, no equipment
6. Progress tracked weekly

### 5.2 Content structure

- **1-week neck & back recovery program** — structured, progressive sessions. Week 1 is available on Free. Full program on Pro.
- **15+ illustrated desk exercises** covering neck, upper back, lower back, posture, and breathing
- **Session types:** 3-min, 5-min, 8-min, 12-min — matched to gap duration
- **Evening recovery:** After 5pm, app shifts to an 8-minute decompression sequence

### 5.3 Key features

| Feature | Free | Pro |
|---|---|---|
| Manual schedule (set work hours) | ✓ | ✓ |
| 3 sessions per week | ✓ | — |
| Week 1 of neck & back program | ✓ | — |
| Full weekly recovery program | — | ✓ |
| Unlimited daily sessions | — | ✓ |
| Calendar sync (Apple / Google / Outlook) | — | ✓ |
| Automatic gap detection | — | ✓ |
| Energy modes (Low / Normal / High) | — | ✓ |
| Evening recovery sequence | — | ✓ |
| Weekly progress report | — | ✓ |

---

## 6. Pricing

| Tier | Price | Notes |
|---|---|---|
| Free | $0 forever | Entry point. Proves value before payment. |
| Pro | $4.99/month | MRR model. Calendar sync is the upgrade hook. |

**Pricing rationale:**
- Free tier removes paywall friction and validates the core nudge before asking for money
- Calendar sync as the Pro unlock means users who decline calendar access still get value
- $4.99/mo is accessible enough to reduce month-1 churn hesitation
- MRR model preferred over one-time purchase per incubator requirements
- Churn is the real test — not conversion. Progress (week-over-week program advancement) is the retention mechanic

---

## 7. Technical Scope

### v0 — iOS

| Component | Approach |
|---|---|
| Apple Calendar | EventKit (iOS native, no OAuth, one permission prompt) |
| Gap detection | On-device only — no server-side calendar processing |
| Exercise cards | Static illustrated cards — no AI generation |
| Notifications | Local push notifications |
| Auth | None for v0 — no user accounts required |
| Backend | None for v0 |

**Why iOS first:** EventKit is a native iOS framework requiring no API keys, no OAuth flow, no token refresh. One permission prompt. Google Calendar on Android requires OAuth2 — meaningfully more complex. iOS-first is the right call.

### v1 — Android

- Google Calendar API + OAuth2
- Google Play distribution
- Feature parity with iOS v0

### Not in scope for v0

- AI-generated exercise content
- User-created routines
- Social / sharing features
- Wearable integration (Apple Watch, Fitbit)
- Web app

---

## 8. Distribution

| Channel | Notes |
|---|---|
| App Store (iOS) | Primary. Search terms: "desk stretch," "neck pain relief," "office workout," "meeting break" |
| Google Play (Android) | v1 |
| Organic / word of mouth | Calendar-aware notification screenshot is inherently shareable |
| Paid acquisition | None until 30-day retention >40% is validated |

---

## 9. Competitive Landscape

| Product | What it does | Gap |
|---|---|---|
| **Wakeout** | Apple App of the Year. 2000+ desk exercises, movement-aware nudges via Apple Health. | No calendar integration. Retrospective trigger. |
| **Stand Up!** | Simple interval timer, ~$2.99 one-time. | No content, no calendar. |
| **Apple Watch stand reminders** | Built-in, free. Fires at 50min regardless of calendar. | No content, no intelligence. |
| **TickTick / Streaks** | Habit/reminder tools with calendar integration. | Not body-focused. No exercise content. |

**Wakeout revenue:** Est. $1–3M ARR (not publicly disclosed). Paid + subscription model.

---

## 10. Success Metrics

| Milestone | Target |
|---|---|
| Waitlist | 100 signups before launch |
| Month 1 retention | 30-day retention >40% |
| Month 3 conversion | Free → Pro >8% |
| Month 6 churn | Monthly churn <5% |
| 12-month MRR | $8K+ (1,000 paying users) |

---

## 11. Open Questions

1. **Demand validation:** Do non-founder users respond to calendar-aware prescriptions with the same intensity as the founder?
2. **Churn:** Does progress (week-over-week program) create enough habit stickiness past month 2?
3. **Android timing:** When does Android demand justify OAuth2 complexity?
4. **Content fatigue:** 15 exercises sufficient for v0. At what point does fatigue set in — and does that require AI generation, UGC, or expanded library?
5. **Wakeout risk:** How quickly can Wakeout ship "check calendar before firing"? One engineer's week is the estimate. First-mover habit loop is the only durable defense.

---

## 12. Risks

| Risk | Severity | Mitigation |
|---|---|---|
| Wakeout adds calendar integration | High | Ship fast. First-mover habit loop is the moat, not the feature. |
| Target user has already self-solved | Medium | ICP is people in active neck/back pain — urgency drives action where vague wellness doesn't. |
| Calendar permission decline rate | Medium | Free tier works without calendar. Calendar sync is Pro upgrade, not entry requirement. |
| Churn before habit forms | High | Progressive program (week 1 → week 2) creates a reason to stay that random exercises don't. |
| No external demand validation | Medium | Waitlist + usage data from free tier is the first real signal. |

---

## 13. Roadmap

### Now — Pre-launch
- [ ] Waitlist live (landing page at 9-5-body-reset.vercel.app)
- [ ] Fix Supabase waitlist integration
- [ ] Submit incubator application
- [ ] Design illustrated exercise cards (15 exercises)

### v0 — iOS Launch
- [ ] EventKit calendar integration
- [ ] Gap detection algorithm (≥10 min gaps, 2-min buffer)
- [ ] Local push notifications
- [ ] 1-week neck & back program (static cards)
- [ ] Energy tap (Low / Normal / High)
- [ ] Evening recovery sequence (after 5pm)
- [ ] Posture break timer (calendar-aware, won't fire mid-meeting)
- [ ] App Store submission

### v1 — Post-launch
- [ ] Google Calendar + OAuth2 (Android)
- [ ] Google Play submission
- [ ] Weekly progress report
- [ ] Expanded exercise library
- [ ] User onboarding flow refinement based on v0 data

---

## 14. Landing Page

Live at: https://9-5-body-reset.vercel.app
Repo: github.com/bdamko/9-5-Reset-Landing-page
Stack: Next.js 16, Tailwind CSS, Supabase (waitlist), Vercel

**Waitlist form collects:**
- Email
- Workday type (Office / Remote / Hybrid / Freelance / Student)
- Calendar used (Google / Outlook / Apple / Not sure)
- Biggest desk-work problem (Neck pain / Back pain / Low energy / Poor posture / No time to exercise)
- Hours sitting per workday (4–6 / 6–8 / 8–10 / 10+)

---

## 15. Key Decisions Log

| Decision | Rationale |
|---|---|
| iOS first | EventKit removes OAuth friction. One permission prompt. |
| Free tier without calendar | Calendar sync as Pro unlock — users get value before paying, reduces permission-as-barrier |
| $4.99/mo over one-time | MRR preferred by incubator. Recurring value justified by ongoing program + calendar sync. |
| Neck & back focus over general wellness | Specific pain = urgency. Urgency drives action. "General wellness" doesn't. |
| Progressive program over random exercises | Week-over-week progress is the churn defense. Random cards have no reason to return. |
| No backend for v0 | All gap detection on-device. Privacy + simplicity. |
| Static exercise cards for v0 | Ship fast. AI generation is v2 when content fatigue is confirmed. |
