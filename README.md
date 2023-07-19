# Full Stack E-Commerce + Dashboard & CMS: Next.js 13 App Router, React, Tailwind, Prisma, MySQL


For Store DEMO, use [@Vercel](https://clothes-ecommerce-store.vercel.app/)
For Admin DEMO, use [@Vercel](https://clothes-ecommerce-admin.vercel.app/)

Admin repo [@Github](https://github.com/xroobix/clothes-ecommerce-admin)

### Built with

- TypeScript
- [TailwindCSS](https://tailwindcss.com) - A utility-first CSS framework
- [React](https://reactjs.org/) - JS library
- [NextJS](https://nextjs.org) - Next.js enables you to create full-stack Web applications by extending the latest React features
- [Prisma](https://www.prisma.io) - Next-generation Node.js and TypeScript ORM
- [PlanetScale](https://planetscale.com) - PlanetScale is the world’s most advanced serverless MySQL platform
- [MySQL](https://www.mysql.com) - Relational database management system
- [Zustand](https://zustand-demo.pmnd.rs) - A small, fast and scalable bearbones state-management solution using simplified flux principles.
- [Clerk](https://clerk.com) - Integrate complete user management UIs and APIs, purpose-built for React, Next.js, and the Modern Web.
- [Stripe](https://stripe.com) - Suite of APIs powering online payment processing and commerce solutions for internet businesses of all sizes.
- [shadcn UI](https://ui.shadcn.com) - Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.


Key Features:

- Admin dashboard serve as both CMS, Admin and API!
- Ability to control mulitple vendors / stores through this single CMS! (For example you can have a "Shoe store" and a "Laptop store" and a "Suit store", and CMS will generate API routes for all of those individually!)
- Ability to create, update and delete categories!
- Ability to create, update and delete products!
- Ability to upload multiple images for products, and change them whenever you want!
- Ability to create, update and delete filters such as "Color" and "Size", and then match them in the "Product" creation form.
- Ability to create, update and delete "Billboards" which are these big texts on top of the page. Ability to attach them to a single category, or use them standalone (Admin generates API for all of those cases!)
- Ability to Search through all categories, products, sizes, colors, billboards with included pagination!
- Ability to control which products are "featured" so they show on the homepage!
- Ability to see your orders, sales, etc.
- Ability to see graphs of your revenue etc.
- Clerk for authentication
- Order creation
- Stripe for payment
- MySQL + Prisma + PlanetScale

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/xroobix/clothes-ecommerce-store.git
```

### Install packages

```shell
pnpm i
```

### Setup .env file


```js
NEXT_PUBLIC_API_URL=
```


### Start the app

```shell
pnpm run dev
```
