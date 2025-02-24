---
title: "Strategy Development: How we Design an eCommerce and position a brand in Google"
author: jesus gutierrez
img: /nvstoreDesktop.png
description: "In this Case Study i'll show you the thought process of how I help NV Store in building a functional online Ecommerce while optimizing their online presence in Google."
date: 20250122T000000-0400
---

<!-- intro -->
<p>In this Case Study i'll show you the thought process of how I help <a title='ir a https://nvstore.vercel.app/' href="https://nvstore.vercel.app/" target='_blank' rel='noreferrer nofollow noopener'>NV Store</a> in building a functional online Ecommerce while optimizing their online presence in Google.</p>

<div class="flex gap-2 overflow-hidden max-md:flex-col-reverse md:gap-4">
<img class="mx-auto aspect-auto max-h-[580px] md:max-h-64 lg:max-h-96 xl:max-h-[360px]" src='/nvstoreMobile.png' alt="mobile view of nvstore" />
<img class="mx-auto aspect-video max-h-64 max-sm:max-h-72 lg:max-h-96 xl:max-h-[360px]" src='/nvstoreDesktop.png' alt="desktop view of nvstore" />
</div>
<!-- contexto del proyecto -->

<h2>Project context</h2>

<p>The client is an <strong>online store selling sportswear and accessories</strong>, with a primary focus on <strong>products for women.</strong> As a new and small brand, their main challenge was <strong>increasing their digital presence</strong> to compete with more established brands. They aimed to <strong>improve their visibility on Google</strong>, <strong>attracting organic traffic with higher purchase intent</strong>, and ultimately to <strong>convert that traffic into sales.</strong></p>

<p>The client also needed a <strong>functional and accessible website</strong> that would allow visitors to explore their <strong>product catalog</strong>—initially simple—with the option to be redirected to a customer service channel <strong>(via WhatsApp)</strong> to complete purchases or resolve inquiries. This approach leveraged the convenience their customers already found in interacting directly through <strong>WhatsApp Business,</strong> where they manage sales manually.</p>

<figure>
    <picture>
        <img class="mx-auto" src='/flow-en.png' alt="user flow expected" />
    </picture>
    <figcaption class='text-white/90 text-center text-sm font-normal sm:text-base'>user flow expected</figcaption>
</figure>

<p>Although they had an <strong>active presence on social media</strong>, their visibility on Google was practically nonexistent. That’s why they turned to us for a <strong>customized, fast, secure, and SEO-optimized website</strong>—one that could <strong>position their brand in search engines and drive traffic to their products.</strong> The ultimate goal was to <strong>convert local visitors and potential customers</strong> without relying solely on constant efforts on social media.</p>

<div class='md:hidden'>
<figure>
    <picture>
        <img class="mx-auto aspect-auto max-h-[650px] md:max-h-64 lg:max-h-96 xl:max-h-[720px]" src='/busquedaMobile1.png' alt="screenshot searching for the name of the store in its location" />
    </picture>
    <figcaption class='text-white/90 text-center text-sm font-normal sm:text-base'>Searching for the name of the store in its Location</figcaption>
</figure>

<figure>
    <picture>
        <img class="mx-auto aspect-auto max-h-[650px] md:max-h-64 lg:max-h-96 xl:max-h-[720px]" src='/busquedaMobile2.png' alt="screenshot searching for the name of the Website" />
    </picture>
    <figcaption class='text-white/90 text-center text-sm font-normal sm:text-base'>Searching for the name of the Website</figcaption>
</figure>

<figure>
    <picture>
        <img class="mx-auto aspect-auto max-h-[650px] md:max-h-64 lg:max-h-96 xl:max-h-[720px]" src='/busquedaMobile.png' alt="Screenshot of the search results pages in a desktop device" />
    </picture>
    <figcaption class='text-white/90 text-center text-sm font-normal sm:text-base'>Search results pages in a desktop device</figcaption>
</figure>
</div>

<div class='flex gap-1 max-md:hidden'>
<figure class='w-[248px] place-items-center px-1'>
    <picture class=''>
        <img class="aspect-auto max-h-[580px] lg:max-h-96" src='/busquedaMobile1.png' alt="screenshot searching for the name of the store in its location" />
    </picture>
     <figcaption class='text-white/90 text-center text-sm font-normal sm:text-base'>Searching for the name of the store in its Location in a mobile device</figcaption>
</figure>

<figure class='h-min '>
    <picture class='h-min'>
        <img class="aspect-video h-[384px] max-lg:max-h-[320px]" src='/busqueda.png' alt="Search results pages in a desktop device" />
    </picture>
    <figcaption class='text-white/90 text-center text-sm font-normal sm:text-base'>Search results pages in a desktop device</figcaption>
</figure>
</div>
<!-- Investigación Inicial y Planificación -->

<h2>Initial Research and Planning</h2>
<p>Since the brand had no prior positioning on Google, the initial strategy focused on establishing a basic yet effective presence. This involved the <strong>identification of relevant keywords</strong> that reflected their <strong>geographic location, industry (sportswear store), and address,</strong> ensuring they could be easily found by <strong>local customers.</strong></p>

<p>A competitive analysis was conducted, <strong>evaluating the profiles of other well-ranked local stores and their reviews</strong> to identify key areas for improvement. As a differentiating strategy, we proposed the <strong>creation of a unique and fully customized website</strong> that would faithfully reflect the client's brand identity and style.</p>

<p>During this stage, specific needs for the website were identified, such as <strong>a design that facilitated access to the product catalog from any device,</strong> with <strong>fast loading times</strong> and a clear <strong>flow to the customer service section via WhatsApp.</strong> Additionally, a structure was planned that included:</p>

<ul>
<li>
 <p>A visible <strong>call to action</strong> to the <strong>web store</strong>.</p>
</li>
<li>
<p><strong>Featured products</strong> on sale, with a timer to create a <strong>sense of urgency</strong>.</p>
</li>
<li>
<p><strong>Recent customer reviews</strong> directly integrated from <strong>Google Reviews</strong>, <strong>to build trust</strong>.</p>
</li>
<li>
 <p>A footer with the brand's vision and <strong>social media icons</strong>, to <strong>capture prospects who weren't ready to make a purchase.</strong></p>
</li>
</ul>

<p>Regarding technologies, <strong>Astro</strong> was chosen, a meta-framework specialized in creating <strong>static websites</strong>, ideal for <strong>optimizing SEO</strong>. This allowed the integration of React to <strong>enhance the user experience (UX)</strong>, leveraging dynamic interactions without compromising loading times.</p>

<p>The development was planned in phases, starting with a basic design of the website, including the catalog and featured product sections. Subsequently, iterations were made to <strong>optimize the user interface (UI) design</strong>, simplifying navigation and reducing friction for users. Once the site was established, <strong>relevant keywords were integrated</strong> in line with the objectives, and a <strong>business profile linked to the website was created,</strong> enhancing the <strong>organic positioning strategy.</strong></p>

<p>Finally, the planning prioritized a continuous improvement approach, incorporating functionalities based on the client's evolving needs and initial user feedback.</p>

<!-- implementacion del proyecto -->

<h2>Proyect implementation</h2>

<h3>Website Design</h3>

<p>The website design was based on previous experiences with another <strong>eCommerce project built entirely in <a title='view the ReactJS documentation' href="https://react.dev/" target='_blank' rel='noreferrer nofollow noopener'>React.</a></strong> The most effective and visually appealing functionalities were selected and adapted for this new project. Since there were no clear specifications, the visual development was carried out iteratively. <strong>The design foundation was centered on matching the colors of the brand's "NV" logo,</strong> establishing a primary background tone and a complementary accent tone. A <strong>simple and functional interface</strong> was chosen, focusing on highlighting essential elements such as products, prices, and purchase buttons, ensuring they were <strong>highly visible and easily navigable, especially on mobile devices.</strong></p>

<p>This requirements were stablished and prioritized by me, having in mind that the goal was to guarantee a <strong>fluid experience focused on the user.</strong></p>

<h3>Technical Development</h3>

<p>The integration of Astro with client-side rendering frameworks like React is quite straightforward thanks to Astro's structure. However, one of the biggest challenges was deciding which parts of the site would be statically generated to <strong>optimize SEO</strong> and which would remain <strong>dynamic components to enhance interactivity.</strong></p>

<p>To <strong>reduce API calls</strong> and <strong>improve loading times</strong>, optimized components were designed to store static product information, such as titles and descriptions, while <strong>interactivity was kept to the essentials.</strong> A particular case was the offer timer: a hybrid component was designed to display an interactive countdown on modern devices <strong>while showing a static date on older or lower-capacity devices—like my current phone.</strong></p>

<div class="flex gap-2 overflow-hidden justify-center max-sm:flex-col md:gap-4">
<figure >
    <picture >
<img class="mx-auto sm:max-lg:max-h-[539px] max-h-[620px]" src='/captura-nvstore-reloj.jpg' alt="functional countdown offer component " />
</picture>
<figcaption class='text-white/90 text-center text-sm font-normal sm:text-base'>
Functional countdown component until End-date</figcaption>
</figure>
<figure>
    <picture>
<img class="mx-auto sm:max-lg:max-h-[539px] max-h-[620px]" src='/captura-nvstore-reloj-1.jpg' alt="static countdown offer component" />
</picture>
<figcaption class='text-white/90 text-center text-sm font-normal sm:text-base'>
Countdown component with static End-date</figcaption>
</figure>
</div>

<p>Regarding custom functionalities, <strong>direct payment processing was avoided</strong> on the site. Instead, a logic was implemented that <strong>redirects users to the customer service channel</strong> via a checkout button in the shopping cart.</p>

<h3>SEO and Content</h3>

<p>To optimize SEO, <a title='see AstroJS docs' href="https://astro.build/" target='_blank' rel='noreferrer nofollow noopener'>Astro's</a> capability to <strong>generate static content</strong> was leveraged, allowing the site to be fully rendered from the start. This <strong>improves search engine indexing by including relevant keywords</strong> and <strong>structuring the HTML correctly.</strong> Although the content is still limited, <strong>basic information about the store's services,</strong> such as delivery and flexible payment options, was included. <strong>The selected keywords have low competition,</strong> focusing on <strong>local searches within the city</strong> and the specific <bold>name of the store.</bold></p>

<h3>Adjustments and Testing</h3>

<p>The site was launched once the essential features <strong>(home and product catalog)</strong> were ready. Testing was primarily conducted on <strong>my computer and a low-end phone</strong> to ensure <strong>fast loading times and a responsive experience across different screen sizes.</strong> Additionally, Google searches were performed using various terms to check how the site appeared in search results and make adjustments accordingly.</p>

<p><strong>Client and initial users feedback was key to making adjustments.</strong> Irrelevant services inherited from the previous site were removed, and <strong>compatibility across different devices was verified,</strong> correcting display issues on smaller screens.</p>

<h3>Launch and Post-Implementation</h3>

<p>The site was deployed using <a title='Go to Vercel.com' href="https://vercel.com/" target='_blank' rel='noreferrer nofollow noopener'>Vercel</a>, enabling a seamless continuous integration experience through <a title='Go to GitHub' href="https://github.com/" target='_blank' rel='noreferrer noopener'>GitHub</a> repositories. <strong>Any changes made to the code were automatically deployed,</strong> providing a testing and a production environment to verify functionality in both development and live settings.</p>

<p>After the launch, initial <strong>metrics were monitored using <a title='go to google search console' href="https://search.google.com/search-console/about" target='_blank' rel='noreferrer nofollow noopener'>Google Search Console.</a></strong> This included analyzing impressions, clicks, and related search terms to refine the <strong>SEO strategy.</strong> Additionally, the traffic sources and devices used by visitors were evaluated, allowing for specific optimizations to enhance the site's relevance in search results.</p>

<p>This project demonstrates how a strategic approach, <strong>focused on the client's specific needs</strong> and supported by modern technologies like <a title='view AstroJS documentation' href="https://astro.build/" target='_blank' rel='noreferrer nofollow noopener'>Astro</a>, can transform a brand's digital presence. From creating a <strong>visually appealing and functional website</strong> to implementing <strong>SEO optimizations</strong> to attract a local audience, every step was designed <strong>to build trust and increase visibility in a competitive market.</strong></p>

<p>The results speak for themselves: an <strong>efficient, accessible website aligned with the business objectives.</strong> This not only <strong>positions the brand as a trustworthy option</strong> in its industry but also lays the foundation for sustainable growth.</p>

<h2>Ready to Skyrocket your sells?</h2>
<p>If you're looking to <strong>improve how your business presents itself in the digital world,</strong> this case serves as an invitation to <strong>explore similar solutions.</strong> With the right combination of <strong>design, technology, and strategy,</strong> you can connect with your customers in a more meaningful and effective way.</p>

<p>Are You are Ready to <strong>take your business to the next level</strong> with an <strong>optimized and visually appealing website?</strong> send me an instagram direct message at <a href="https://ig.me/m/yidev27" target='_blank' rel='noreferrer nofollow noopener'>@yidev27</a> today and discover how I can help you to <strong>enhance your online presence and attract more customers.</strong> Let’s talk!</p>
