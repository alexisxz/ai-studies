import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[2560px] bg-white">
      {/* Hero Section */}
      <section className="relative h-[1024px] w-full overflow-hidden">
        {/* Logo top right */}
        <div className="absolute right-[59px] top-[44px] z-30 h-[103px] w-[347px]">
          <Image
            src="/images/haecker-logo.png"
            alt="Haecker Metall Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Hero headline */}
        <div className="absolute left-[59px] top-[64px] z-30 w-[489px]">
          <h1 className="text-[70px] font-semibold uppercase leading-[1.15]">
            <span className="text-haecker-yellow">SEIEN SIE </span>
            <span className="text-haecker-yellow">DABEI WENN</span>
            <br />
            <span className="text-haecker-blue">SICH DIE</span>
            <br />
            <span className="text-haecker-blue">TÜREN</span>
            <br />
            <span className="text-haecker-blue">Öffnen</span>
          </h1>
        </div>

        {/* Building image */}
        <div className="absolute left-[7px] top-[264px] z-10 h-[956px] w-[1247px]">
          <Image
            src="/images/schneidcenter-1.png"
            alt="Schneidcenter Gebäude"
            fill
            className="object-contain"
          />
        </div>

        {/* Metal structure right */}
        <div className="absolute left-[814px] top-[287px] z-20 h-[836px] w-[879px]">
          <Image
            src="/images/haecker-metall-3.png"
            alt="Haecker Metall Struktur"
            fill
            className="object-contain"
          />
        </div>
      </section>

      {/* Qualität Section */}
      <section className="relative h-[643px] w-full overflow-hidden mx-auto">
        {/* Dark metal pattern background */}
        <div className="absolute w-full h-full opacity-10">
          <Image
            src="/images/dark-metal-pattern.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>

        <div className="flex flex-col gap-8  mx-auto pt-8">
          {/* Heading */}
          <div className="">
            <h2 className="text-[66px] font-semibold uppercase leading-[1.15]">
              <span className="text-haecker-yellow">Haecker </span>
              <span className="text-haecker-blue">
                schafft Raum für Wachstum
              </span>
            </h2>
          </div>

          {/* Description text */}
          <p className="text-[25px] leading-[33px] text-haecker-blue-dark">
            Seien Sie dabei, wenn sich sprichwörtlich die Türen zu unseren neu
            geschaffenen Räumlichkeiten öffnen und freuen Sie sich auf eine
            Live-Präsentation unserer modernen Fertigungstechnologien,
            persönliche Gespräche und einen gemeinsamen Blick in die Zukunft von
            Haecker Metall
          </p>
        </div>

        {/* Separator line */}
        <div className="absolute left-1/2 top-[555px] h-[45px] w-[1504px] -translate-x-1/2">
          <Image
            src="/images/haecker-metall-4.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>
      </section>

      {/* Details Section */}
      <section className="relative h-[1544px] w-full overflow-hidden bg-haecker-blue">
        {/* Details heading */}
        <h2 className="absolute left-[72px] top-[102px] text-[66px] font-semibold uppercase leading-normal text-haecker-yellow">
          DETAILS
        </h2>

        {/* Schneidcenter image — large, cropped like Figma */}
        <div className="absolute left-[28px] top-[485px] h-[650px] w-[1306px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/schneidcenter-2.png"
            alt="Schneidcenter Gebäude"
            className="absolute left-[-10.18%] top-[-38.5%] h-[174.24%] w-[122.66%] max-w-none"
          />
        </div>

        {/* Highlights */}
        <div className="absolute left-[922px] top-[171px] flex w-[381px] flex-col items-start gap-[8px]">
          <h3 className="w-full text-[33px] font-semibold uppercase leading-normal text-white">
            Highlights
          </h3>
          <svg
            width="175"
            height="10"
            viewBox="0 0 175 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern-datum"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-datum"
                  transform="matrix(0.000396773 0 0 0.00654782 -0.217895 -5.57402)"
                />
              </pattern>
              <image
                id="image-datum"
                width="3508"
                height="2480"
                preserveAspectRatio="none"
                xlinkHref="/images/haecker-linie.png"
              />
            </defs>
            <rect
              width="175"
              height="10"
              transform="matrix(1 0 0 -1 0 10)"
              fill="url(#pattern-datum)"
            />
          </svg>
          <p className="w-full text-[25px] leading-[33px] text-white">
            Es erwarten Sie ausgewählte Highlights, die diesen Tag besonders
            machen: spannende Einblicke, Raum für Begegnungen und inspirierende
            Momente, die zeigen wofür wir stehen: Innovation, Präzision und
            unsere Leidenschaft für NE-Metalle.
          </p>
        </div>

        {/* Datum */}
        <div className="absolute left-[283px] top-[310px] flex w-[213px] flex-col items-start gap-[8px]">
          <h3 className="w-full text-[33px] font-semibold uppercase leading-normal text-white">
            Datum
          </h3>
          <svg
            width="175"
            height="10"
            viewBox="0 0 175 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern-datum"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-datum"
                  transform="matrix(0.000396773 0 0 0.00654782 -0.217895 -5.57402)"
                />
              </pattern>
              <image
                id="image-datum"
                width="3508"
                height="2480"
                preserveAspectRatio="none"
                xlinkHref="/images/haecker-linie.png"
              />
            </defs>
            <rect
              width="175"
              height="10"
              transform="matrix(1 0 0 -1 0 10)"
              fill="url(#pattern-datum)"
            />
          </svg>
          <div className="w-full text-[25px] leading-[33px] text-white">
            <p>09. Oktober 2026 </p>
            <p>15:00 Uhr</p>
          </div>
        </div>

        {/* Decorative vectors */}
        <div className="absolute left-[430px] top-[332.5px] h-[279px] w-[114px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vector-1.svg"
            alt=""
            className="h-full w-full"
            aria-hidden="true"
          />
        </div>
        <div className="absolute left-[868px] top-[194.5px] h-[461px] w-[44.5px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vector-2.svg"
            alt=""
            className="h-full w-full"
            aria-hidden="true"
          />
        </div>
        <div className="absolute left-[1084px] top-[733.5px] h-[340px] w-[43px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vector-3.svg"
            alt=""
            className="h-full w-full"
            aria-hidden="true"
          />
        </div>
        <div className="absolute left-[652px] top-[770.5px] h-[524px] w-[47.5px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vector-4.svg"
            alt=""
            className="h-full w-full"
            aria-hidden="true"
          />
        </div>
        <div className="absolute left-[263px] top-[682px] h-[316px] w-[95px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vector-5.svg"
            alt=""
            className="h-full w-full"
            aria-hidden="true"
          />
        </div>

        {/* Ellipse dots */}
        <div className="absolute left-[531px] top-[603px] size-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ellipse.svg"
            alt=""
            className="size-full"
            aria-hidden="true"
          />
        </div>
        <div className="absolute left-[345px] top-[665px] size-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ellipse.svg"
            alt=""
            className="size-full"
            aria-hidden="true"
          />
        </div>
        <div className="absolute left-[855px] top-[656px] size-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ellipse.svg"
            alt=""
            className="size-full"
            aria-hidden="true"
          />
        </div>
        <div className="absolute left-[1114px] top-[721px] size-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ellipse.svg"
            alt=""
            className="size-full"
            aria-hidden="true"
          />
        </div>
        <div className="absolute left-[687px] top-[752px] size-[26px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/ellipse.svg"
            alt=""
            className="size-full"
            aria-hidden="true"
          />
        </div>

        {/* Kulinarik */}
        <div className="absolute left-[63px] top-[973px] flex w-[373px] flex-col items-start gap-[8px]">
          <h3 className="w-full text-[33px] font-semibold uppercase leading-normal text-white">
            KULINARIK
          </h3>
          <svg
            width="175"
            height="10"
            viewBox="0 0 175 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern-datum"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-datum"
                  transform="matrix(0.000396773 0 0 0.00654782 -0.217895 -5.57402)"
                />
              </pattern>
              <image
                id="image-datum"
                width="3508"
                height="2480"
                preserveAspectRatio="none"
                xlinkHref="/images/haecker-linie.png"
              />
            </defs>
            <rect
              width="175"
              height="10"
              transform="matrix(1 0 0 -1 0 10)"
              fill="url(#pattern-datum)"
            />
          </svg>
          <p className="w-full text-[25px] leading-[33px] text-white">
            Neben einem spannenden Festprogramm erwarten Sie auch kulinarische
            Genüsse ...
          </p>
        </div>

        {/* Ort */}
        <div className="absolute left-[999px] top-[1050px] flex w-[426px] flex-col items-start gap-[8px]">
          <h3 className="w-full text-[33px] font-semibold uppercase leading-normal text-white">
            Ort
          </h3>
          <svg
            width="175"
            height="10"
            viewBox="0 0 175 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern-datum"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-datum"
                  transform="matrix(0.000396773 0 0 0.00654782 -0.217895 -5.57402)"
                />
              </pattern>
              <image
                id="image-datum"
                width="3508"
                height="2480"
                preserveAspectRatio="none"
                xlinkHref="/images/haecker-linie.png"
              />
            </defs>
            <rect
              width="175"
              height="10"
              transform="matrix(1 0 0 -1 0 10)"
              fill="url(#pattern-datum)"
            />
          </svg>
          <div className="w-full text-[25px] leading-[33px] text-white">
            <p>
              FERD. HAECKER GMBH &amp; CO. KG
              <br />
              Stuttgarter str. 36
            </p>
            <p>75179 Pforzheim</p>
          </div>
        </div>

        {/* Parken */}
        <div className="absolute left-[500px] top-[1270px] flex w-[420px] flex-col items-start gap-[8px]">
          <h3 className="w-full text-[33px] font-semibold uppercase leading-normal text-white">
            Parken
          </h3>
          <svg
            width="175"
            height="10"
            viewBox="0 0 175 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="pattern-datum"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-datum"
                  transform="matrix(0.000396773 0 0 0.00654782 -0.217895 -5.57402)"
                />
              </pattern>
              <image
                id="image-datum"
                width="3508"
                height="2480"
                preserveAspectRatio="none"
                xlinkHref="/images/haecker-linie.png"
              />
            </defs>
            <rect
              width="175"
              height="10"
              transform="matrix(1 0 0 -1 0 10)"
              fill="url(#pattern-datum)"
            />
          </svg>
          <div className="w-full text-[25px] leading-[33px] text-white">
            <p>
              FERD. HAECKER GMBH &amp; CO. KG
              <br />
              Stuttgarter str. 36
            </p>
            <p>75179 Pforzheim</p>
          </div>
        </div>
      </section>

      {/* Anmelden Section */}
      <section className="relative h-[1082px] w-full bg-white">
        {/* Yellow card background */}
        <div className="absolute left-1/2 top-[71px] h-[970px] w-[716px] -translate-x-1/2 rounded-2xl bg-haecker-yellow" />

        {/* Form content */}
        <div className="absolute left-1/2 top-[126px] flex w-[526px] -translate-x-1/2 flex-col items-center gap-[37px]">
          {/* Heading */}
          <div className="text-center text-haecker-blue-dark">
            <h2 className="text-[67px] font-semibold uppercase leading-[1.086]">
              Anmelden
            </h2>
            <p className="mt-2 text-[20px] leading-[1.26] tracking-[1px]">
              Bitte bestätigen Sie uns Ihre Teilnahme
              <br />
              über dieses Formular:
            </p>
          </div>

          {/* Form fields */}
          <div className="flex w-full flex-col items-center gap-[39px]">
            <input
              type="text"
              placeholder="Name"
              className="h-[54px] w-full rounded-xl bg-white px-4 text-[16px] tracking-[0.8px] placeholder:text-black/40"
            />
            <input
              type="text"
              placeholder="Vorname"
              className="h-[54px] w-full rounded-xl bg-white px-4 text-[16px] tracking-[0.8px] placeholder:text-black/40"
            />
            <input
              type="tel"
              placeholder="Telefonnummer"
              className="h-[54px] w-full rounded-xl bg-white px-4 text-[16px] tracking-[0.8px] placeholder:text-black/40"
            />
            <input
              type="email"
              placeholder="E-Mail-Adresse"
              className="h-[54px] w-full rounded-xl bg-white px-4 text-[16px] tracking-[0.8px] placeholder:text-black/40"
            />
            <input
              type="text"
              placeholder="Unternehmen"
              className="h-[54px] w-full rounded-xl bg-white px-5 text-[16px] tracking-[0.8px] placeholder:text-black/40"
            />

            {/* Checkboxes */}
            <div className="flex w-full items-center gap-[31px]">
              <label className="flex items-center gap-[14px]">
                <input
                  type="checkbox"
                  className="h-[20px] w-[21px] rounded-[5px] border border-haecker-blue-dark appearance-none bg-transparent"
                />
                <span className="text-[16px] tracking-[0.8px] text-black">
                  Ich komme mit Begleitung
                </span>
              </label>
              <label className="flex items-center gap-[14px]">
                <input
                  type="checkbox"
                  className="h-[20px] w-[21px] rounded-[5px] border border-haecker-blue-dark appearance-none bg-transparent"
                />
                <span className="text-[16px] tracking-[0.8px] text-black">
                  Ich kann leider nicht kommen
                </span>
              </label>
            </div>

            <input
              type="text"
              placeholder="Name meiner Begleitung"
              className="h-[54px] w-full rounded-xl bg-white px-4 text-[16px] tracking-[0.8px] placeholder:text-black/40"
            />

            {/* Submit button */}
            <button
              type="submit"
              className="h-[79px] w-[293px] rounded-xl bg-haecker-blue text-[36px] font-semibold uppercase tracking-[1.8px] text-white shadow-[0px_10px_12.8px_0px_rgba(0,0,0,0.25)]"
            >
              Abschicken
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative h-[500px] w-full overflow-hidden">
        {/* Top separator */}
        <div className="absolute left-[calc(50%-6px)] top-0 h-[50px] w-[1514px] -translate-x-1/2">
          <Image
            src="/images/haecker-metall-4.png"
            alt=""
            fill
            className="object-cover"
            aria-hidden="true"
          />
        </div>

        {/* Quick Links */}
        <div className="absolute left-[61px] top-[266px] flex w-[168.5px] flex-col items-start gap-[26px] text-haecker-blue-dark">
          <h4 className="text-[24px] font-semibold uppercase leading-[20px]">
            Quick Links
          </h4>
          <div className="flex flex-col gap-[24px] text-[16px] font-semibold leading-[16px]">
            <a href="#" className="text-haecker-blue-dark hover:underline">
              Datenschutz
            </a>
            <a href="#" className="text-haecker-blue-dark hover:underline">
              Impressum
            </a>
          </div>
        </div>

        {/* Company info right */}
        <div className="absolute left-[989px] top-[106px] flex w-[325px] flex-col items-end gap-[28px]">
          <div className="flex w-full flex-col items-end gap-[56px]">
            <div className="relative h-[103px] w-[347px]">
              <Image
                src="/images/haecker-logo.png"
                alt="Haecker Metall Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="w-[299px] text-right text-[16px] font-semibold leading-[20px] text-haecker-blue-dark">
              <p>
                Ferd. Haecker GmbH &amp; Co. KG
                <br />
                Stuttgarter Straße 36
                <br />
                75179 Pforzheim
              </p>
              <p className="mt-4">
                Telefon +49 7231 44434-0
                <br />
                E-Mail: info@haecker-metall.de
              </p>
            </div>
          </div>
          {/* Instagram */}
          <a href="#" aria-label="Instagram" className="size-[30px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/instagram.svg"
              alt="Instagram"
              className="size-full"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
