import { MetadataRoute } from 'next'
import { servicesData, locationsData, brandsData } from '@/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://replacementwindowsirving.com'
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/windows`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/doors`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/locations`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/brands`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/materials`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]
  
  // Window pages - filter for window types
  const windowPages: MetadataRoute.Sitemap = servicesData
    .filter(service => service.category === 'Window Installation')
    .map((service) => ({
      url: `${baseUrl}/windows/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  
  // Door pages - filter for door types
  const doorPages: MetadataRoute.Sitemap = servicesData
    .filter(service => service.category === 'Door Installation')
    .map((service) => ({
      url: `${baseUrl}/doors/${service.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    }))
  
  // Location pages
  const locationPages: MetadataRoute.Sitemap = locationsData.map((location) => ({
    url: `${baseUrl}${location.route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  // Brand pages
  const brandPages: MetadataRoute.Sitemap = brandsData.map((brand) => ({
    url: `${baseUrl}${brand.route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [...staticPages, ...windowPages, ...doorPages, ...locationPages, ...brandPages]
}
