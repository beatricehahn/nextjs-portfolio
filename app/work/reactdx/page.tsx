import { CaseHeader } from "@/components/organisms/CaseStudyComponents";
import { CaseContext } from "@/components/organisms/CaseStudyComponents";
import { CaseSnapshot } from "@/components/organisms/CaseStudyComponents";

export default function Reactdx() {
    return (
        <div className="max-w-screen-lg mx-auto px-[18px]">
            <CaseHeader 
                imageSrc="/images/work-img-placeholder.png"
                title="React Diagnostics Telepatch Mobile UI Redesign"
            />
            <CaseContext 
                brand="React Diagnostics"
                role="UI/UX Designer"
                industry="Healthcare"
                timeline="August-September 2024"
            />
            <CaseSnapshot 
                businessSrc="/"
                userSrc="/"
                solutionSrc="/"
                businessProblem="Text"
                userProblem="Text"
                solution="Text"
            />
            <main>
                <section>
                    <h2>Overview</h2>
                    <p>
                    TelePatch is an at-home cardiac monitoring device that enables physicians to continuously monitor patients' EKG data in real time. Designed for long-term use, patients wear the TelePatch for a full month while maintaining their regular daily routines, with live data being transmitted seamlessly. The system is complemented by a mobile app, which allows users to record symptoms as they occur. Users can either record a voice note or select symptoms manually, enhancing the accuracy of their medical reporting and providing physicians with valuable insights for timely intervention.
                    </p>
                </section>
                <section>
                    <h2>The Challenge</h2>
                    <h3>Understanding why Users were opting out of recording their symptoms on the app
                    </h3>
                    <p>This project addresses key usability challenges in a mobile symptom-tracking app, specifically focusing on improving convenience and accessibility. Users found the two-handed navigation cumbersome, particularly when logging symptoms on the go or during busy moments. The lack of confirmation messages after symptom entries created uncertainty, while the inability to dim the bright screen at night raised concerns about eye strain. These pain points led users to avoid the app, even when they needed it most, reducing overall engagement and effectiveness.</p>
                    <p>The goal was to enhance the user experience by streamlining symptom logging for one-handed use, providing visual feedback through confirmation messages, and introducing features like adjustable screen brightness. While the product is designed for any patients needing to monitor and record heart symptoms, this project specifically focused on enhancing accessibility for working professionals with busy schedules and unmet accessibility needs. The business objectives aimed to boost user retention and reduce friction in the symptom logging process, ensuring users felt confident and comfortable using the app consistently. By making the process smoother, users would be more likely to record their symptoms rather than neglecting to report them. In turn, this would support physicians when they analyze user data holistically. </p>
                    <h3>Mobile technical constraints to consider:</h3>
                    <p>The mobile app comes pre-installed on a dedicated phone provided as part of the at-home cardiac monitoring kit. Users are unable to install or access the app on their personal devices. The mobile phone is pre-programmed to restrict usage to only the TelePatch app, which introduces unique accessibility challenges:
                    </p>
                    <ul>
                        <h6>Users are unable to utilize other features or apps that might assist with ease of use, limiting flexibility and potentially impacting the overall user experience such as:
                        </h6>
                        <li>Being unable to initiate mobile phone’s system dark mode</li>
                        <li>Enlarge font size unavailable
                        </li>
                    </ul>
                </section>
                <section>
                    <h2>The Solution</h2>
                    <h3>Enhancing Accessibility for Seamless Symptom Tracking</h3>
                </section>
                <section>
                    <h2>The Process Breakdown</h2>
                    <h3>01 Research and Discovery: Initiating User and Business Research</h3>
                    <h4>Understanding the product from the user side</h4>
                    <p>I conducted a user interview for current users and people who had used similar recording apps in the past. 
                    </p>
                    <h4>Understanding the product from the business side</h4>
                    <p>ReactDX (React Diagnostics) develops products and services in the cardiac telemedicine and home sleep testing industries. I wanted to paint a clear picture about the product goals and how it aligns with React Diagnostic’s business goals. This involved interacting with the physical product kit in addition to digital research on the company. To achieve this, I studied the product packaging, instruction manual, and discovered React Diagnostic’s branding and mission statement: Their mission is to provide “accurate diagnostics and timely interventions” for patients so that they may achieve a better quality of life. I noted that their mission is reflected in the design of the physical monitoring device, clear instruction manual steps, and their mobile interface. This gave me a better understanding of how I should plan out integrating user and business needs.</p>
                    <p>Based on my notes about the business and user target, this is the user story I came up with: “As a user, I want to log heart symptoms quickly and easily so that I don’t delay or ignore logging symptoms because of the hassle”</p>
                    <h4>UX Auditing</h4>
                    <p>Next, I started a UI audit of the app to assess the current state of the user interface, map out the user flow to mark where pain points occurred, identify strengths, and create a list for areas of improvement: 
                    </p>
                    <ul>
                        <li>
                            <div>
                                <h5>Visual accessibility could be improved</h5>
                                <p>Immediately, my first impression was that the primary theme color presented a user and business conflict. From a user standpoint, it is overly saturated and creates eye fatigue over time. From a business standpoint, this shade of blue was not the same one used in their brand identity which causes a disconnect from the product and the image that the business wants to project.
                                </p>
                                <p>Font size and secondary color made it difficult for users to intake important information such as device battery level</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5>Information hierarchy could be improved</h5>
                                <p></p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5>I created a user flow and annotated where users encountered frustration</h5>
                                <p>There were missing visual cues and confirmation screens after symptom logging completion</p>
                            </div>
                        </li>
                        <li>
                            <div>
                                <h5> Product and identity disconnect</h5>
                                <p>From a business standpoint, the app did not reflect React Diagnostics brand identity. This creates issues because users don't connect the app and the main diagnosis product emotionally.</p>
                            </div>
                        </li>
                    </ul>
                    <h4>Competitive Analysis </h4>
                    <p>I then conducted a competitive analysis of direct (other brand that developed similar cardiac symptom recording apps for supplementing health diagnosis) and indirect market competitors (apps that had a similar process of logging symptoms or life experiences, but not necessarily heart symptoms). </p>
                    <h3>02 Ideation and planning strategy</h3>
                    <p>At this phase, I gathered all user interview data and created an affinity map to reveal the common themes within user expressed sentiment. Afterwards, I generated a list of new and existing app features to address the issues identified earlier.</p>
                    <h3>03 Wireframe, Prototype, and  Iteration</h3>
                    <p>This is the section where I explain my sketch, lo-fi, to hi-fi design process.</p>
                    <h3>04 Testing</h3>
                </section>
                <section>
                    <h2>The Results</h2>
                    <div>
                        <h3>Success Metrics</h3>
                        <ul>
                            <li>
                                <h4>Metric #1: User satisfaction and engagement</h4>
                                <ul>
                                    <li>Post-redesign interviews revealed that users found the symptom logging process to be smoother and more intuitive.</li>
                                    <li>Users also expressed feeling more motivated to use the app for recording symptoms, as the process no longer felt cumbersome or frustrating.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <h4>Metric #2: Task completion and accuracy rates </h4>
                                <ul>
                                    <li>Post-redesign interviews revealed that users found the symptom logging process to be smoother and more intuitive.</li>
                                    <li>Users also expressed feeling more motivated to use the app for recording symptoms, as the process no longer felt cumbersome or frustrating.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Reflection and Key Learnings</h3>
                        <p>Reflection goes here</p>
                        <ul>
                            <li>
                                <h4>Key learning #1: Streamlined Workflows Reduce Errors</h4>
                                <p>Redesigning key workflows to be more intuitive helps reduce submission errors, improving overall data accuracy.
                                </p>
                            </li>
                            <li>
                                <h4>Key learning #2: UX Auditing Provides Critical User Insights</h4>
                                <p>Conducting a UX audit allows you to step into the users' shoes, uncovering pain points and usability issues that may not surface during user interviews if not articulated by users. This additional perspective helps identify design flaws and opportunities for improvement, complementing user feedback with a more comprehensive understanding of the user experience.
                                </p>
                            </li>
                            <li>
                                <h4>Key learning #3: Usability tests can reveal unexpected contradictions to design hypotheses</h4>
                                <p>This demonstrating which ideas are merely conceptual and which are truly practical for real-world use.</p>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Ideas for future product improvement</h3>
                        <ul>
                            <li>Idea #1: </li>
                            <li>Idea #2: </li>
                        </ul>
                    </div>
                </section>
            </main>
        </div>
    )
};