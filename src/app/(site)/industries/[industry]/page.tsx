import Banner from '@/components/Banner';
import GradientText from '@/components/GradientText';
import CompanyImpact from '@/components/sections/CompanyImpact';
import NewsletterSubscription from '@/components/sections/EmailNewsletter';
import ReviewSection from '@/components/sections/ReviewSection';
import SplitColorText from '@/components/SplitColorText';
import { Button } from '@/components/ui/button';
import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { industries } from '@/lib/constants';
import { transformSlug } from '@/lib/utils';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Props = {
  params: {
    industry: string;
  };
};

const IndustryPage = ({ params: { industry } }: Props) => {
  const selectedIndustry = industries.find((i) => i.slug === industry);
  if (!selectedIndustry) notFound();

  return (
    <div className="space-y-20">
      <div className="mb-60">
        <Banner
          image={selectedIndustry.bannerImage}
          className="left-6 -bottom-[8.5rem] min-[550px]:-bottom-24 md:-bottom-32 lg:-bottom-40"
          minHeight="min-h-[350px]"
        >
          <div className="flex flex-col gap-4">
            <h3 className="text-sm font-medium text-white leading-relaxed">{transformSlug(selectedIndustry.slug)}</h3>
            <p className="text-4xl min-[550px]:text-5xl md:text-7xl lg:text-8xl text-white font-medium mb-2">From a</p>
            <SplitColorText
              text="concept to"
              className="text-4xl min-[550px]:text-5xl md:text-7xl lg:text-8xl text-black font-medium mb-2"
              firstColor="from-white"
              secondColor="to-black"
              viaColor="via-black"
            />
            <div className="flex flex-col min-[550px]:flex-row gap-4 min-[550px]:items-center">
              <p className="text-4xl min-[550px]:text-5xl md:text-7xl lg:text-8xl text-black font-medium">
                digital reality
              </p>
              <Button asChild className="bg-custom-orange px-4 py-2 rounded-full hover:bg-custom-orange">
                <Link href={'#'}>
                  Get in Touch <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Banner>
      </div>
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 flex flex-col md:flex-row items-center gap-x-20 gap-y-8">
        <div className="md:w-1/2">
          <GradientText>
            Our <span className="text-custom-purple">{transformSlug(selectedIndustry.slug)}</span> let you concentrate
            on what matters
          </GradientText>
          <p className="text-gray-600 mb-4">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
            atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
          </p>
          <p className="text-gray-600">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem
            aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
        </div>
        <div className="md:w-1/2">
          <Image
            src={selectedIndustry.imageSrc}
            alt="Managed IT Services"
            width={500}
            height={300}
            className="rounded-lg object-cover object-center aspect-square w-full hover:zoom-out-150 transition-all"
            quality={100}
          />
        </div>
      </section>
      <StickyScroll
        content={selectedIndustry.offers.offerings}
        mainHeading={selectedIndustry.offers.mainHeading}
        subtitle={selectedIndustry.offers.subtitle}
      />
      <ReviewSection />
      <CompanyImpact />
      <section className="w-full px-4 py-6 sm:px-6 lg:px-12 space-y-10">
        <h3 className="text-3xl font-semibold text-custom-purple text-center">Related Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedIndustry.relatedArticles.map((article) => (
            <article className="space-y-4" key={article.slug}>
              <Image
                src={article.thumbnail}
                alt={transformSlug(article.slug)}
                width={500}
                height={300}
                quality={100}
                className="aspect-square w-full object-cover"
              />
              <h4 className="text-lg font-semibold">{article.title}</h4>
              <Link href={`/articles/${article.slug}`} className="text-custom-purple text-lg flex gap-2 group items-center">
                Read More
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-all" />
              </Link>
            </article>
          ))}
        </div>
      </section>
      <NewsletterSubscription />
    </div>
  );
};

export default IndustryPage;
