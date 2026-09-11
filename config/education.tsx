export interface EducationItem {
  id: string;
  label: string;
  href: {
    label?: string;
    hrefLabel?: string;
    href?: string;
  }[];
  alt: string;
  image: string;
}

export const EDUCATION: EducationItem[] = [
  {
    id: 'goit',
    label: 'GoIt FullStack Developer',
    href: [
      {
        hrefLabel: 'Link Certificate',
        href: 'https://drive.google.com/file/d/1KrjfelPdkGbInPLPH2KhsUfmu7wQVpDs/view?usp=sharing',
      },
    ],
    alt: 'GoIt Certificate Preview',
    image: '@/data/img/goit.png',
  },
  {
    id: 'itvdn',
    label: 'ITVDN Python Developer',
    href: [
      {
        label: 'Python Advanced',
        hrefLabel: 'Link certificate',
        href: 'https://testprovider.com/ru/search-certificate/tp50692654',
      },
      {
        label: 'Flask',
        hrefLabel: 'Link certificate',
        href: 'https://testprovider.com/ru/search-certificate/tp79680549',
      },
      {
        label: 'MySQL',
        hrefLabel: 'Link certificate',
        href: 'https://testprovider.com/ru/search-certificate/tp86740084',
      },
      {
        label: 'PostgreSQL',
        hrefLabel: 'Link certificate',
        href: 'https://testprovider.com/ru/search-certificate/tp46131522',
      },
    ],
    alt: 'ITVDN Certificates Previews',
    image: '@/data/img/itvdn.png',
  },
  {
    id: 'college',
    label:
      'Prydniprovskyi Humanitarian and Economic College, Open International University of Human Development "Ukraine"',
    href: [
      {
        label: 'Associate Degree, Finance and Financial Management Services',
      },
      {
        label: 'Jun 2011 - Jul 2012',
      },
    ],
    alt: 'College Certificate Preview',
    image: 'college',
  },
];
