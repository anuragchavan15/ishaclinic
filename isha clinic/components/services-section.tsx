"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Baby,
  Heart,
  Flower,
  Shield,
  Phone,
  Stethoscope,
  Activity,
  CircleDot,
  Brain,
  Pill,
  Droplets,
} from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Baby,
      title: "Prenatal Check-ups",
      description:
        "Comprehensive prenatal care combining modern medical practices with traditional Ayurvedic wisdom for healthy pregnancy journey.",
      details: {
        subtitle: "🌸 Prenatal Check-Up – How It Happens",
        content: [
          {
            heading: "Medical History & Consultation",
            points: [
              "Discussion about mother's health, family history, and pregnancy journey so far",
              "Tracking lifestyle, diet, and any symptoms",
            ],
          },
          {
            heading: "Physical Examination",
            points: [
              "Checking blood pressure, weight, and overall health",
              "Monitoring signs of anemia, swelling, or discomfort",
            ],
          },
          {
            heading: "Fetal Growth & Wellbeing",
            points: [
              "Abdominal examination to check the baby's position, size, and growth",
              "Listening to baby's heartbeat (Doppler or stethoscope)",
            ],
          },
          {
            heading: "Routine Investigations",
            points: [
              "Blood tests (hemoglobin, sugar, thyroid, etc.)",
              "Urine tests (protein, sugar, infections)",
              "Ultrasound scans (as per trimester needs)",
            ],
          },
          {
            heading: "Guidance & Support",
            points: [
              "Nutrition counseling with Ayurvedic diet guidance",
              "Safe exercise and yoga recommendations",
              "Emotional wellbeing support",
            ],
          },
        ],
        approach: {
          title: "🌿 How We Do It the Best Way (Our Clinic's Approach)",
          points: [
            "Holistic Care: We blend modern diagnostic tools with Ayurveda for complete care",
            "Personalized Plans: Each expecting mother receives a tailored schedule for check-ups, diet, yoga, and Garbhasanskar practices",
            "Ayurvedic Guidance: Use of safe herbal supplements, oils, and therapies that support pregnancy naturally",
            "Comfort & Trust: Friendly consultation environment with detailed answers to every question",
            "Preventive Approach: Early detection and prevention of complications by regular monitoring",
            "Education: Mothers are guided about each stage of pregnancy, self-care, and baby care preparation",
          ],
        },
      },
    },
    {
      icon: Heart,
      title: "Garbhasanskar Programs",
      description:
        "Ancient Ayurvedic practices for prenatal education and spiritual development of the unborn child through holistic approaches.",
      details: {
        subtitle: "🌸 Garbhasanskar Programs – Ancient Wisdom for Modern Mothers",
        content: [
          {
            heading: "Spiritual & Mental Development",
            points: [
              "Meditation and mindfulness practices for mother and baby",
              "Positive affirmations and visualization techniques",
              "Sacred chanting and mantra recitation",
            ],
          },
          {
            heading: "Nutritional Guidance",
            points: [
              "Ayurvedic diet plans for each trimester",
              "Herbal supplements for optimal fetal development",
              "Foods that enhance baby's intelligence and immunity",
            ],
          },
          {
            heading: "Lifestyle Practices",
            points: [
              "Prenatal yoga and gentle exercises",
              "Breathing techniques (Pranayama)",
              "Daily routines aligned with natural rhythms",
            ],
          },
          {
            heading: "Educational Activities",
            points: [
              "Reading spiritual texts and positive literature",
              "Listening to classical music and devotional songs",
              "Art therapy and creative expression",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Comprehensive Garbhasanskar Approach",
          points: [
            "Personalized Programs: Customized based on mother's constitution and pregnancy stage",
            "Expert Guidance: Regular sessions with experienced Ayurvedic practitioners",
            "Family Involvement: Including partners and family members in the journey",
            "Scientific Integration: Combining ancient wisdom with modern understanding",
            "Continuous Support: Weekly follow-ups and 24/7 consultation availability",
          ],
        },
      },
    },
    {
      icon: Flower,
      title: "Ayurvedic Gynec Care",
      description:
        "Specialized gynecological treatments using natural Ayurvedic remedies and therapies for women's health and wellness.",
      details: {
        subtitle: "🌸 Ayurvedic Gynecological Care – Natural Healing for Women",
        content: [
          {
            heading: "Menstrual Health Management",
            points: [
              "Natural remedies for irregular periods and PCOS",
              "Herbal treatments for menstrual pain and discomfort",
              "Hormonal balance through Ayurvedic medicines",
            ],
          },
          {
            heading: "Fertility Enhancement",
            points: [
              "Natural fertility boosting treatments",
              "Detoxification therapies (Panchakarma)",
              "Stress management and lifestyle counseling",
            ],
          },
          {
            heading: "Women's Wellness Therapies",
            points: [
              "Abhyanga (therapeutic oil massage)",
              "Yoni steaming and herbal treatments",
              "Specialized treatments for menopause",
            ],
          },
          {
            heading: "Preventive Care",
            points: [
              "Regular health assessments and consultations",
              "Dietary guidance for hormonal health",
              "Yoga and meditation for overall wellness",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Holistic Women's Care Approach",
          points: [
            "Root Cause Treatment: Addressing underlying imbalances, not just symptoms",
            "Natural Remedies: Using time-tested herbs and therapies without side effects",
            "Personalized Care: Treatment plans based on individual constitution (Prakriti)",
            "Confidential Environment: Safe, comfortable space for women's health discussions",
            "Comprehensive Support: From adolescence through menopause and beyond",
          ],
        },
      },
    },
    {
      icon: Shield,
      title: "Suwarnprashan for Kids",
      description:
        "Traditional Ayurvedic immunization program using gold-based formulations to boost immunity and cognitive development in children.",
      details: {
        subtitle: "🌸 Suwarnprashan – Golden Immunity for Your Child",
        content: [
          {
            heading: "What is Suwarnprashan?",
            points: [
              "Ancient Ayurvedic immunization using gold (Swarna) preparations",
              "Safe, natural way to boost child's immunity and intelligence",
              "Administered on auspicious days (Pushya Nakshatra)",
            ],
          },
          {
            heading: "Benefits for Children",
            points: [
              "Enhanced immunity against common infections",
              "Improved cognitive development and memory",
              "Better digestion and overall growth",
              "Increased concentration and learning ability",
            ],
          },
          {
            heading: "Age-Appropriate Dosing",
            points: [
              "Suitable for children from 0-16 years",
              "Customized formulations based on age and constitution",
              "Regular monitoring and dosage adjustments",
            ],
          },
          {
            heading: "Administration Process",
            points: [
              "Given on specific lunar days for maximum benefit",
              "Prepared fresh with authentic ingredients",
              "Administered by qualified Ayurvedic practitioners",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Suwarnprashan Program Excellence",
          points: [
            "Authentic Preparation: Using traditional methods and pure gold preparations",
            "Expert Administration: Qualified practitioners with years of experience",
            "Safety First: Thorough health assessment before starting the program",
            "Parent Education: Complete guidance on post-administration care",
            "Long-term Tracking: Monitoring child's development and immunity progress",
            "Flexible Scheduling: Convenient timing aligned with Pushya Nakshatra",
          ],
        },
      },
    },
    {
      icon: Droplets,
      title: "Urinary Tract & Bladder Stones",
      description:
        "Natural Ayurvedic treatment for kidney stones, bladder stones, and urinary tract disorders using herbal medicines and therapies.",
      details: {
        subtitle: "🌸 Urinary Tract & Bladder Stone Treatment – Natural Healing",
        content: [
          {
            heading: "Stone Dissolution Therapy",
            points: [
              "Herbal formulations to dissolve kidney and bladder stones naturally",
              "Panchakarma therapies for detoxification",
              "Dietary modifications to prevent stone formation",
            ],
          },
          {
            heading: "Pain Management",
            points: [
              "Natural pain relief during stone passage",
              "Anti-inflammatory herbal treatments",
              "Therapeutic massages and heat therapy",
            ],
          },
          {
            heading: "Preventive Care",
            points: [
              "Lifestyle counseling to prevent recurrence",
              "Hydration therapy and dietary guidance",
              "Regular monitoring and follow-up care",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Stone Treatment Approach",
          points: [
            "Non-invasive Treatment: Avoiding surgery through natural dissolution methods",
            "Root Cause Analysis: Identifying and treating underlying metabolic imbalances",
            "Personalized Medicine: Customized herbal formulations based on stone type",
            "Comprehensive Care: From acute management to long-term prevention",
          ],
        },
      },
    },
    {
      icon: Stethoscope,
      title: "Chronic UTI Treatment",
      description:
        "Specialized Ayurvedic treatment for recurrent urinary tract infections using natural antimicrobial herbs and immunity boosters.",
      details: {
        subtitle: "🌸 Chronic UTI Treatment – Breaking the Infection Cycle",
        content: [
          {
            heading: "Infection Control",
            points: [
              "Natural antimicrobial herbs to eliminate bacteria",
              "Immune system strengthening to prevent recurrence",
              "Urinary tract cleansing and detoxification",
            ],
          },
          {
            heading: "Symptom Relief",
            points: [
              "Immediate relief from burning and pain",
              "Reduction in frequency and urgency",
              "Soothing therapies for inflamed tissues",
            ],
          },
          {
            heading: "Long-term Prevention",
            points: [
              "Lifestyle modifications and hygiene counseling",
              "Dietary changes to maintain urinary health",
              "Stress management and immunity building",
            ],
          },
        ],
        approach: {
          title: "🌿 Our UTI Treatment Excellence",
          points: [
            "Holistic Approach: Treating infection while building natural immunity",
            "Safe Alternatives: Avoiding antibiotic resistance through natural treatments",
            "Personalized Care: Treatment plans based on individual constitution",
            "Prevention Focus: Long-term strategies to break the infection cycle",
          ],
        },
      },
    },
    {
      icon: Activity,
      title: "Abdominal Pain Management",
      description:
        "Comprehensive Ayurvedic treatment for various types of abdominal pain including digestive disorders and inflammatory conditions.",
      details: {
        subtitle: "🌸 Abdominal Pain Management – Natural Relief",
        content: [
          {
            heading: "Pain Assessment",
            points: [
              "Detailed evaluation to identify root causes",
              "Differentiation between various types of abdominal pain",
              "Assessment of digestive fire (Agni) and toxin levels",
            ],
          },
          {
            heading: "Treatment Modalities",
            points: [
              "Herbal medicines for pain relief and healing",
              "Therapeutic massages and heat therapy",
              "Panchakarma treatments for detoxification",
            ],
          },
          {
            heading: "Digestive Health Restoration",
            points: [
              "Dietary counseling for optimal digestion",
              "Lifestyle modifications to prevent recurrence",
              "Stress management techniques",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Pain Management Approach",
          points: [
            "Root Cause Treatment: Addressing underlying digestive imbalances",
            "Natural Pain Relief: Using herbs and therapies without side effects",
            "Comprehensive Care: Treating both symptoms and underlying conditions",
            "Patient Education: Teaching self-care techniques for long-term relief",
          ],
        },
      },
    },
    {
      icon: Brain,
      title: "Migraine Treatment",
      description:
        "Ayurvedic approach to migraine management using herbal medicines, lifestyle modifications, and stress reduction techniques.",
      details: {
        subtitle: "🌸 Migraine Treatment – Natural Headache Relief",
        content: [
          {
            heading: "Trigger Identification",
            points: [
              "Detailed assessment of migraine triggers",
              "Lifestyle and dietary pattern analysis",
              "Stress and hormonal factor evaluation",
            ],
          },
          {
            heading: "Acute Management",
            points: [
              "Immediate pain relief through natural remedies",
              "Therapeutic head and neck massages",
              "Breathing techniques for quick relief",
            ],
          },
          {
            heading: "Prevention Strategies",
            points: [
              "Long-term herbal treatments to reduce frequency",
              "Dietary modifications and lifestyle counseling",
              "Stress management and relaxation techniques",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Migraine Management Excellence",
          points: [
            "Personalized Treatment: Customized based on individual triggers and patterns",
            "Natural Approach: Avoiding dependency on pain medications",
            "Holistic Care: Addressing physical, mental, and emotional aspects",
            "Long-term Relief: Focus on prevention rather than just symptom management",
          ],
        },
      },
    },
    {
      icon: Flower,
      title: "Endometriosis Treatment",
      description:
        "Specialized Ayurvedic treatment for endometriosis using natural hormonal balancing and anti-inflammatory therapies.",
      details: {
        subtitle: "🌸 Endometriosis Treatment – Natural Hormonal Healing",
        content: [
          {
            heading: "Hormonal Balance",
            points: [
              "Natural hormone regulation through herbs",
              "Detoxification to eliminate excess estrogen",
              "Liver support for hormone metabolism",
            ],
          },
          {
            heading: "Pain Management",
            points: [
              "Anti-inflammatory herbal treatments",
              "Therapeutic massages and heat therapy",
              "Natural pain relief during menstruation",
            ],
          },
          {
            heading: "Fertility Support",
            points: [
              "Treatments to improve reproductive health",
              "Stress management and emotional support",
              "Nutritional counseling for optimal fertility",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Endometriosis Care Approach",
          points: [
            "Natural Hormone Balance: Using herbs to regulate hormonal imbalances",
            "Anti-inflammatory Focus: Reducing inflammation without side effects",
            "Fertility Preservation: Protecting and enhancing reproductive health",
            "Comprehensive Support: Addressing physical and emotional aspects",
          ],
        },
      },
    },
    {
      icon: Heart,
      title: "Ovarian Diseases",
      description:
        "Comprehensive Ayurvedic treatment for PCOS, ovarian cysts, and other ovarian disorders using natural hormonal therapies.",
      details: {
        subtitle: "🌸 Ovarian Disease Treatment – Natural Reproductive Health",
        content: [
          {
            heading: "PCOS Management",
            points: [
              "Natural insulin sensitivity improvement",
              "Hormonal balance through herbal medicines",
              "Weight management and metabolic support",
            ],
          },
          {
            heading: "Cyst Treatment",
            points: [
              "Natural cyst dissolution therapies",
              "Anti-inflammatory treatments",
              "Hormonal regulation to prevent recurrence",
            ],
          },
          {
            heading: "Fertility Enhancement",
            points: [
              "Ovulation regulation and support",
              "Reproductive health optimization",
              "Stress management for hormonal balance",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Ovarian Health Excellence",
          points: [
            "Root Cause Treatment: Addressing underlying hormonal imbalances",
            "Natural Approach: Avoiding hormonal medications and their side effects",
            "Fertility Focus: Preserving and enhancing reproductive potential",
            "Lifestyle Integration: Comprehensive diet and lifestyle modifications",
          ],
        },
      },
    },
    {
      icon: Activity,
      title: "Thyroid Management",
      description:
        "Natural Ayurvedic treatment for hypothyroidism and hyperthyroidism using herbal medicines and metabolic balancing.",
      details: {
        subtitle: "🌸 Thyroid Management – Natural Metabolic Balance",
        content: [
          {
            heading: "Thyroid Function Optimization",
            points: [
              "Herbal medicines to support thyroid function",
              "Metabolic enhancement through natural therapies",
              "Iodine balance and nutritional support",
            ],
          },
          {
            heading: "Symptom Management",
            points: [
              "Energy level improvement and fatigue reduction",
              "Weight management support",
              "Mood stabilization and stress reduction",
            ],
          },
          {
            heading: "Long-term Care",
            points: [
              "Regular monitoring and dosage adjustments",
              "Lifestyle modifications for thyroid health",
              "Dietary counseling for optimal nutrition",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Thyroid Care Approach",
          points: [
            "Natural Regulation: Supporting thyroid function without synthetic hormones",
            "Holistic Treatment: Addressing root causes and associated symptoms",
            "Personalized Care: Treatment based on individual thyroid patterns",
            "Long-term Support: Sustainable management strategies",
          ],
        },
      },
    },
    {
      icon: CircleDot,
      title: "IUD Placement & Management",
      description:
        "Professional IUD insertion and management services with Ayurvedic support for optimal reproductive health.",
      details: {
        subtitle: "🌸 IUD Services – Safe Contraceptive Care",
        content: [
          {
            heading: "IUD Insertion",
            points: [
              "Professional insertion by qualified practitioners",
              "Pre-insertion counseling and health assessment",
              "Pain management during the procedure",
            ],
          },
          {
            heading: "Post-Insertion Care",
            points: [
              "Ayurvedic support for healing and comfort",
              "Monitoring for any complications",
              "Natural remedies for adjustment period",
            ],
          },
          {
            heading: "Long-term Management",
            points: [
              "Regular check-ups and monitoring",
              "Management of side effects naturally",
              "Removal services when needed",
            ],
          },
        ],
        approach: {
          title: "🌿 Our IUD Care Excellence",
          points: [
            "Safe Procedures: Following all medical protocols for safe insertion",
            "Ayurvedic Support: Natural healing support during adjustment period",
            "Comprehensive Care: From consultation to long-term management",
            "Patient Comfort: Ensuring minimal discomfort and optimal experience",
          ],
        },
      },
    },
    {
      icon: Pill,
      title: "Diabetes Management",
      description:
        "Comprehensive Ayurvedic approach to diabetes management using natural blood sugar control and lifestyle modifications.",
      details: {
        subtitle: "🌸 Diabetes Management – Natural Blood Sugar Control",
        content: [
          {
            heading: "Blood Sugar Regulation",
            points: [
              "Herbal medicines for natural glucose control",
              "Pancreatic function support and enhancement",
              "Insulin sensitivity improvement through natural methods",
            ],
          },
          {
            heading: "Complication Prevention",
            points: [
              "Cardiovascular health protection",
              "Kidney and eye health monitoring",
              "Nerve health support and neuropathy prevention",
            ],
          },
          {
            heading: "Lifestyle Management",
            points: [
              "Diabetic diet planning and counseling",
              "Exercise recommendations and monitoring",
              "Stress management for blood sugar control",
            ],
          },
        ],
        approach: {
          title: "🌿 Our Diabetes Care Approach",
          points: [
            "Natural Control: Using herbs and lifestyle to manage blood sugar",
            "Complication Prevention: Proactive care to prevent diabetic complications",
            "Holistic Management: Addressing diet, exercise, stress, and medication",
            "Patient Education: Teaching self-management skills for long-term success",
          ],
        },
      },
    },
  ]

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
            Our Specialized Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our comprehensive range of Ayurvedic treatments and programs designed for mothers, children, and
            families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <Card className="text-center hover:shadow-lg transition-shadow duration-300 cursor-pointer hover:scale-105 transform transition-transform">
                  <CardHeader>
                    <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-playfair text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-sm leading-relaxed">{service.description}</CardDescription>
                    <p className="text-xs text-primary mt-2 font-medium">Click to learn more</p>
                  </CardContent>
                </Card>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-playfair text-primary flex items-center gap-3">
                    <service.icon className="h-8 w-8" />
                    {service.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-foreground">{service.details.subtitle}</h3>

                  <div className="space-y-4">
                    {service.details.content.map((section, idx) => (
                      <div key={idx}>
                        <h4 className="font-semibold text-foreground mb-2">{section.heading}</h4>
                        <ul className="space-y-1 ml-4">
                          {section.points.map((point, pointIdx) => (
                            <li key={pointIdx} className="text-muted-foreground text-sm flex items-start gap-2">
                              <span className="text-primary mt-1">•</span>
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-foreground mb-3">{service.details.approach.title}</h4>
                    <ul className="space-y-2">
                      {service.details.approach.points.map((point, idx) => (
                        <li key={idx} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-center pt-4">
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                      <a href="tel:+919373693032" className="flex items-center gap-2">
                        <Phone className="h-5 w-5" />
                        Call Now for More Information
                      </a>
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
