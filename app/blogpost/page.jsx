import Image from "next/image"

export default function BlogPost() {
  return (
    <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Image */}
      <div className="relative w-full h-[350px] mb-8 mt-12">
        <Image
          src="/blog/topblog.png"
          alt="Person working on laptop"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>

      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Finibus Bonorum et Malorum
        </h1>
        <div className="flex items-center text-gray-600 text-sm">
          <span className="font-bold">Written by John doe</span>
          <span className="mx-2">•</span>
          <time>Monday May 20</time>
        </div>
      </header>

      {/* Article Content */}
      <div className="prose prose-lg max-w-none">
        <section className="mb-8">
          <p className="text-gray-600">
            Section 1.10.32 of "de Finibus Bonorum et Malorum", written by Cicero in 45 BC
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
            sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
            consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
            tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">1914 translation by H. Rackham</h2>
          <p className="text-gray-600">
            "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was
            born and I will give you a complete account of the system, and expound the actual teachings of the
            great explorer of the truth, the master-builder of human happiness."
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Section</h2>
          <p className="text-gray-600">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Section 1.10.33</h2>
          <p className="text-gray-600">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
            deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
            Et harum quidem rerum facilis est et expedita distinctio."
          </p>
        </section>
      </div>
    </article>
  )
}
