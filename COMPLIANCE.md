point 5 we dont take user details, i think everything is local stored, we might need google analytics to track crashes and user behavior?

I’m checking the current Apple and Google requirements so I can answer this without guessing, especially around analytics, crash reporting, and privacy disclosures.

Thought for 13s

Yes — and this is the key trade-off:

If UBUNCARE is fully local-only, your privacy story is much cleaner. But the moment you add Google Analytics, Firebase Analytics, or Crashlytics, you are no longer in a pure “everything stays on your device” position and you’ll need to disclose that in your privacy materials and store listings. Apple says your App Store privacy details must cover data collected by you and any third-party partners/SDKs you integrate, and Google Play requires the same for its Data safety section.

So my recommendation is:

For launch: keep it as local/private as possible.
Use:

local storage only
no account
no cloud sync
no third-party analytics at first

That gives you simpler messaging like:

“No account needed”
“Designed to keep your reflections private”
“Your wellbeing data stays on your device”

That is much easier to defend at launch. Apple already gives you some app-level analytics in App Store Connect, and submitted iOS apps also get crash reports/diagnostic logs through Apple’s tooling, which can help before you add extra SDKs. Google Play also provides Android vitals reporting for crashes and ANRs.

If later you add Firebase Crashlytics or Google Analytics for Firebase, that can be very useful for stability and product learning, but it changes your privacy position. Firebase Crashlytics is a real-time crash reporter, and Firebase Analytics is specifically for measuring user behavior and events. Crashlytics can also be enriched with custom keys, logs, and even user identifiers if you choose to configure it that way.

So the practical rule is:

No third-party analytics/crash SDKs → you can keep the strongest privacy messaging.
Crash reporting only → still more privacy-friendly than full behavior analytics, but you must disclose it.
Behavior analytics → useful, but you should stop saying things like “everything stays on your device.”

For UBUNCARE, I’d do this:

Phase 1

No Google Analytics
No Firebase Analytics
Possibly no Crashlytics on day one
Rely on Apple/TestFlight/App Store Connect and Google Play vitals first for launch learning

Phase 2

Add Crashlytics only if needed for reliability
Still avoid broad behavioral analytics until you know exactly what you want to measure

That way you preserve the strongest trust story for a mental wellbeing app.

Also, I would slightly soften your website copy even if you stay local, just to future-proof it. Instead of:

“Everything stays on your device”

Use:

“Designed to keep your personal wellbeing journey private”
“No account needed”
“Built with privacy in mind”

That gives you a little room in case you later add crash reporting without making your current copy feel misleading.

My honest advice: for a first UBUNCARE release, skip Google Analytics. If you need anything, add Crashlytics later, carefully, and update your privacy policy and store disclosures when you do. That’s the cleanest founder move here.
