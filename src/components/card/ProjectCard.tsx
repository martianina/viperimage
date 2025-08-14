'use client';

import Image from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  imgSrc?: string;
  href?: string;
}

const ProjectCard = ({ title, description, imgSrc, href }: ProjectCardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-shadow hover:shadow-lg dark:border-none dark:bg-navy-700">
      {imgSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            priority
          />
        </div>
      )}
      <div className="flex flex-col gap-2 p-4">
        <h3 className="text-lg font-semibold text-navy-700 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
        {href && (
          <Link
            href={href}
            className="mt-2 inline-block text-sm font-medium text-brand-500 hover:underline dark:text-white"
          >
            Read More →
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
