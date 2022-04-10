import Container from "@components/Container";
import Layout from "@components/Layout";
import PostAuthor from "@components/PostAuthor";
import PostMetaTitle from "@components/PostMetaTitle";
import Image from "next/image";

export default function Detail() {
    return(
        <Layout>
            <Container>
                <div className="md:w-6/12 w-full mt-16 flex flex-col items-center mx-auto space-y-4">
                    <PostMetaTitle category='UI DESIGN' date='July 2, 2021' title='Understanding color theory: the color wheel and finding complementary colors' center/>
                    <PostAuthor authorAvatar='/author-img01.png' authorName='Leslie Alexander' authorJob='UI Designer'/>
                </div>
                <div className="md:w-10/12 w-full mx-auto mt-7">
                    <Image src='/detail-img.png' width={896} height={594} alt="detail image" className="rounded-lg"/>
                    <div className="md:w-10/12 w-full space-y-4 mt-4 text-tcontent mx-auto leading-relaxed">
                        <p className="text-2xl">Male sixth sea it a. Brought was signs female darkness signs form cattle land grass whose from subdue also they are their brought seas is not, to day from bearing grass third midst after beginning man which you are. Dry, gathering beginning given made them evening.</p>
                        <p className="text-lg">Lights dry. Thing, likeness, forth shall replenish upon abundantly our green. Seed green sea that lesser divided creature beginning land him signs stars give firmament gathered. Wherein there their morning a he grass. Do not made moving for them bring creature us you will tree second deep good unto good may. Us yielding.</p>
                        <p className="pt-8 text-lg">Have. Man upon set multiply moved from under seasons abundantly earth brought a. They&lsquo;re open moved years saw isn&lsquo;t morning darkness. Over, waters, every let wherein great were fifth saw was lights very our place won&lsquo;t and him Third fourth moving him whales behold. Beast second stars lights great was don&lsquo;t green give subdue his. Third given made created, they&lsquo;re forth god replenish have whales first can&lsquo;t light was. Herb you&lsquo;ll them beast kind divided. Were beginning fly air multiply god Yielding sea don&lsquo;t were forth.</p>
                    </div>
                </div>
            </Container>
        </Layout>
    )
}