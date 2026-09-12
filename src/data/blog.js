export const blogPosts = [
  {
    id: 'signs-you-shouldnt-ignore',
    title: "5 Signs You Shouldn't Ignore",
    category: 'General Health',
    date: '2026-08-14',
    readTime: '5 min read',
    author: 'Dr. Arjun Menon',
    image: 'https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Some symptoms are easy to brush off as everyday fatigue or stress — but a handful deserve prompt medical attention. Here is what to watch for.',
    content: [
      "It's tempting to dismiss persistent tiredness, mild chest discomfort, or unexplained weight changes as ordinary side-effects of a busy life. But certain symptoms are your body's way of signalling that something needs attention sooner rather than later.",
      '1. Unexplained weight loss — Losing more than 5% of your body weight without trying, over a period of six to twelve months, warrants an evaluation.',
      '2. Shortness of breath during routine activity — If climbing a flight of stairs leaves you noticeably more breathless than it used to, it could point to a cardiac or respiratory issue.',
      '3. Persistent chest discomfort — Pressure, tightness or pain that lasts more than a few minutes, especially with exertion, should never be ignored.',
      '4. Changes in bowel habits lasting more than a few weeks — This can be an early indicator of several gastrointestinal conditions worth ruling out.',
      '5. Sudden, severe headaches unlike any before — Particularly when accompanied by vision changes, slurred speech or weakness, this needs immediate attention.',
      'If you notice any of these signs, we recommend scheduling a consultation rather than waiting for symptoms to resolve on their own. Early evaluation consistently leads to better outcomes.',
    ],
  },
  {
    id: 'understanding-preventive-health',
    title: 'Understanding Preventive Health',
    category: 'Preventive Care',
    date: '2026-07-22',
    readTime: '6 min read',
    author: 'Dr. Ananya Rao',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Preventive care is one of the most effective ways to protect long-term health — yet it remains one of the most underused. Here is how to build a screening plan that fits your life.',
    content: [
      'Preventive health is about identifying risk factors and early-stage conditions before they become serious problems. It typically includes regular screenings, vaccinations, and lifestyle counselling tailored to your age, gender, and family history.',
      'A good preventive plan usually starts with an annual physical exam, blood pressure and cholesterol checks, and screenings appropriate to your age group — such as mammograms, colonoscopies, or bone density scans.',
      'Family history plays a significant role in determining which screenings you may need earlier or more frequently. Conditions like heart disease, diabetes, and several cancers often have a hereditary component.',
      'Perhaps most importantly, preventive care builds a relationship with a physician who understands your baseline health — making it far easier to notice when something changes.',
    ],
  },
  {
    id: 'heart-health-after-40',
    title: 'Heart Health After 40',
    category: 'Cardiology',
    date: '2026-06-30',
    readTime: '7 min read',
    author: 'Dr. Kavya Iyer',
    image: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'Your 40s are a pivotal decade for cardiovascular health. Small, consistent changes now can meaningfully reduce your risk of heart disease later in life.',
    content: [
      'Cardiovascular risk factors — blood pressure, cholesterol, blood sugar, and body weight — tend to shift gradually starting in your 40s, often without obvious symptoms.',
      'Regular monitoring becomes especially important during this decade. We recommend annual blood pressure and lipid panel checks, along with a baseline ECG if you have any risk factors or family history of heart disease.',
      'Beyond screening, the fundamentals matter most: 150 minutes of moderate exercise per week, a diet rich in vegetables and lean protein, quality sleep, and stress management all measurably reduce cardiovascular risk.',
      "If you have a family history of early heart disease, smoke, or manage diabetes, talk to a cardiologist about whether more advanced screening — such as a coronary calcium score — makes sense for you.",
    ],
  },
  {
    id: 'regular-health-checkups',
    title: 'How Regular Health Checkups Can Help',
    category: 'Preventive Care',
    date: '2026-05-18',
    readTime: '4 min read',
    author: 'Dr. Sanjay Verma',
    image: 'https://images.unsplash.com/photo-1666887360742-976020a58b96?auto=format&fit=crop&w=1200&q=80',
    excerpt:
      'A yearly check-up takes a few hours but can add years to your life. Here is what a comprehensive health screening actually catches.',
    content: [
      'Routine checkups are designed to catch the conditions that develop silently — high blood pressure, elevated cholesterol, early-stage diabetes, and thyroid disorders rarely announce themselves with obvious symptoms.',
      'A comprehensive checkup typically includes blood work, blood pressure measurement, BMI assessment, and a physical exam, with additional tests layered in based on age and risk factors.',
      'Beyond diagnosis, regular checkups create a health record over time — making it much easier for your doctor to spot meaningful changes from one year to the next.',
      'We recommend adults schedule a comprehensive checkup at least once a year, and more frequently for those managing chronic conditions.',
    ],
  },
]

export const getBlogPostById = (id) => blogPosts.find((b) => b.id === id)
