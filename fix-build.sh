#!/bin/bash

# Fix apostrophes in all component files
for file in src/app/components/*.tsx; do
  # Fix you're -> you&apos;re
  sed -i '' "s/you're/you\&apos;re/g" "$file"
  # Fix we'll -> we&apos;ll  
  sed -i '' "s/we'll/we\&apos;ll/g" "$file"
  # Fix I'm -> I&apos;m
  sed -i '' "s/I'm/I\&apos;m/g" "$file"
  # Fix 've -> &apos;ve
  sed -i '' "s/'ve/\&apos;ve/g" "$file"
done

# Fix specific quote issues in Testimonials
sed -i '' 's/"{testimonial.text}"/\&quot;{testimonial.text}\&quot;/g' src/app/components/Testimonials.tsx

# Remove unused imports
sed -i '' '/import.*ChevronRight.*lucide-react/d' src/app/components/AICoach.tsx
sed -i '' '/import.*Heart.*lucide-react/d' src/app/components/ProofRibbon.tsx
sed -i '' '/import.*Users.*lucide-react/d' src/app/components/Testimonials.tsx
sed -i '' '/import.*Users.*lucide-react/d' src/app/components/WaitlistForm.tsx

# Fix useEffect dependency in HeroPro
sed -i '' "s/useEffect(() => {/, conversation]);/g" src/app/components/HeroPro.tsx