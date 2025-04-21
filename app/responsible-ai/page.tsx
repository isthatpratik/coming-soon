import { Metadata } from 'next'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Responsible AI | NeuralArc',
  description: 'Our commitment to ethical, transparent, and fair AI solutions',
}

export default function ResponsibleAIPage() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <div className="bg-[#F8F7F3] py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl lg:max-w-5xl mx-auto">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#2F2C28] mb-4">Responsible AI</h1>
          <p className="text-2xl lg:text-3xl text-[#978163] mb-8">
            Building ethical, transparent, and fair AI solutions for startups and investors
          </p>

          <div className="prose prose-lg lg:prose-xl text-[#2F2C28]">
            <p className="text-lg lg:text-xl mb-8">
              At NeuralArc, we are dedicated to building and deploying AI solutions that drive growth for startups and investors while maintaining the highest standards of ethics, transparency, and fairness. Our commitment to Responsible AI is at the core of everything we do.
            </p>

            <section className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-6">Ethical AI Matching for Startups & Investors</h2>
              <ul className="list-disc pl-6 text-lg lg:text-xl space-y-4">
                <li>
                  <span className="font-semibold">Bias-Free Recommendations:</span> Our AI matching tool connects startups with the most suitable investors using objective criteria such as industry focus, growth stage, and funding history. We regularly audit our algorithms to identify and eliminate any biases.
                </li>
                <li>
                  <span className="font-semibold">Inclusive Opportunities:</span> We ensure that startups from diverse backgrounds have equitable access to funding opportunities by maintaining a wide and inclusive investor database.
                </li>
                <li>
                  <span className="font-semibold">Explainable AI:</span> Our matching tool provides clear insights into how connections are made, ensuring transparency for both startups and investors.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-6">Transparent Decision-Making in Deal Flow Management</h2>
              <ul className="list-disc pl-6 text-lg lg:text-xl space-y-4">
                <li>
                  <span className="font-semibold">AI-Assisted Insights:</span> NeuralArc CRM leverages AI to help startups manage their sales pipelines and investors manage deal flow, providing real-time insights and forecasts.
                </li>
                <li>
                  <span className="font-semibold">Interpretability:</span> Users can easily understand how AI-driven predictions are generated, fostering trust in our technology.
                </li>
                <li>
                  <span className="font-semibold">User Empowerment:</span> Our CRM allows users to customize AI models according to their preferences, keeping them in control of their business processes.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-6">Data Security & Privacy</h2>
              <ul className="list-disc pl-6 text-lg lg:text-xl space-y-4">
                <li>
                  <span className="font-semibold">Robust Protection:</span> We implement end-to-end encryption and secure data storage to protect user information from unauthorized access.
                </li>
                <li>
                  <span className="font-semibold">Privacy by Design:</span> Our AI tools comply with global standards such as GDPR, ensuring user data is handled with care and consent.
                </li>
                <li>
                  <span className="font-semibold">Confidentiality Assurance:</span> We never share proprietary data without explicit permission and use anonymized datasets for model training.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-6">Fairness in Growth Capital and Secondary Buyouts</h2>
              <ul className="list-disc pl-6 text-lg lg:text-xl space-y-4">
                <li>
                  <span className="font-semibold">Objective Analysis:</span> Our AI evaluates Growth Capital and Secondary Buyout opportunities using clear, data-driven methodologies.
                </li>
                <li>
                  <span className="font-semibold">No Conflicts of Interest:</span> Our advisory services maintain neutrality and ensure fairness in every recommendation.
                </li>
                <li>
                  <span className="font-semibold">Equal Opportunity:</span> We use unbiased data models to ensure every startup, regardless of size or background, has equal access to capital opportunities.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-6">Accountability & Continuous Improvement</h2>
              <ul className="list-disc pl-6 text-lg lg:text-xl space-y-4">
                <li>
                  <span className="font-semibold">Human Oversight:</span> Our expert advisory team continuously reviews AI outputs to ensure accuracy and alignment with business goals.
                </li>
                <li>
                  <span className="font-semibold">Ongoing Audits:</span> We regularly test and update our models to mitigate risks such as model drift or discriminatory outcomes.
                </li>
                <li>
                  <span className="font-semibold">Feedback Loops:</span> Our AI systems learn from user interactions and feedback, driving continuous improvement and relevance.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-semibold text-[#2F2C28] mb-6">Sustainable and Responsible Innovation</h2>
              <ul className="list-disc pl-6 text-lg lg:text-xl space-y-4">
                <li>
                  <span className="font-semibold">Green AI Practices:</span> We aim to minimize the environmental impact of our AI operations by optimizing computing resources and adopting energy-efficient technologies.
                </li>
                <li>
                  <span className="font-semibold">Social Impact:</span> Our solutions are designed to promote financial inclusion and support sustainable business growth.
                </li>
                <li>
                  <span className="font-semibold">Responsible Deployment:</span> We carefully evaluate potential impacts before launching new AI features to ensure they align with our ethical standards.
                </li>
              </ul>
            </section>

            <p className="text-lg lg:text-xl mt-12">
              At NeuralArc, Responsible AI is not just a commitment—it is a core principle driving innovation, trust, and value creation for startups and investors alike.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
} 