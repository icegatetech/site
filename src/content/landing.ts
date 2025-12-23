import { PageContent } from '@gravity-ui/page-constructor';

export const landingContent: PageContent = {
  blocks: [
    // Hero Section
    {
      type: 'header-block',
      title: 'IceGate',
      description: 'An open-source Observability Data Lake Engine. Fast, cost-effective, and scalable observability data storage built on open standards.',
      verticalOffset: 'l',
      width: 's',
      image: {
        src: 'images/icegate-diagram.jpeg',
        alt: 'IceGate Architecture Diagram',
        disableCompress: true,
      },
      mediaView: 'fit',
      buttons: [
        {
          text: 'Get Started',
          theme: 'action',
          url: 'https://docs.icegate.tech',
          size: 'xl',
        },
        {
          text: 'View on GitHub',
          theme: 'outlined',
          url: 'https://github.com/icegatetech/icegate',
          size: 'xl',
        },
      ],
    },

    // Key Features Section
    {
      type: 'extended-features-block',
      title: {
        text: 'Built for Modern Observability',
      },
      description: 'IceGate leverages cutting-edge technologies to provide a robust observability platform.',
      animated: true,
      colSizes: {
        all: 12,
        sm: 6,
        md: 4,
        lg: 3,
      },
      items: [
        {
          title: 'Highly Scalable',
          text: 'Independent scaling of compute resources based on workload demands. Scale ingest and query separately.',
        },
        {
          title: 'ACID Transactions',
          text: 'Full transaction support without requiring a dedicated OLTP database. Built on Apache Iceberg and own queue based on WAL on object storage.',
        },
        {
          title: 'Exactly-Once Delivery',
          text: 'Reliable data ingestion with no data loss or duplication. Every event is processed exactly once.',
        },
        {
          title: 'Real-Time Queries',
          text: 'Access live data through WAL while maintaining historical query capabilities. No lag between ingest and query.',
        },
        {
          title: 'Open Standards',
          text: 'Built on Apache Iceberg, Arrow, and Parquet with OpenTelemetry protocol support. No proprietary formats.',
        },
        {
          title: 'Cost-Effective',
          text: 'Object storage-based architecture minimizes infrastructure costs. Pay only for what you use.',
        },
        {
          title: 'Fault-Tolerant',
          text: 'Designed for resilience and high availability. Automatic recovery from failures.',
        },
        {
          title: 'No Vendor Lock-in',
          text: 'Standard formats allow querying with any Iceberg-compatible tool. Your data, your choice.',
        },
      ],
    },

    // Architecture Section
    {
      type: 'card-layout-block',
      title: 'Modern Architecture',
      description: 'Compute-Storage Separation with four core components',
      colSizes: {
        all: 12,
        sm: 6,
        md: 6,
      },
      children: [
        {
          type: 'basic-card',
          title: 'Ingest',
          text: 'OpenTelemetry Protocol accepts observability data with exactly-once delivery',
          icon: 'images/icon-arrow-down.svg',
          url: '#ingest',
        },
        {
          type: 'basic-card',
          title: 'Query',
          text: 'Apache DataFusion + Arrow enables fast queries across logs, metrics, traces, and events',
          icon: 'images/icon-magnifier.svg',
          url: '#query',
        },
        {
          type: 'basic-card',
          title: 'Maintain',
          text: 'Apache Parquet optimizes data with statistics, bloom filters, and TTL support',
          icon: 'images/icon-gear.svg',
          url: '#maintain',
        },
        {
          type: 'basic-card',
          title: 'Alert',
          text: 'Rule Management Engine generates alerts from your observability data',
          icon: 'images/icon-bell.svg',
          url: '#alert',
        },
      ],
    },

    // Technology Stack Section
    {
      type: 'icons-block',
      title: 'Powered by Open Source',
      description: 'Built on battle-tested open source technologies trusted by enterprises worldwide.',
      size: 'm',
      items: [
        {
          src: 'images/iceberg.svg',
          url: 'https://iceberg.apache.org/'
        },
        {
          src: 'images/datafusion.svg',
          url: 'https://datafusion.apache.org/'
        },
        {
          src: 'images/opentelemetry.svg',
          url: 'https://opentelemetry.io/',
        },
        {
          src: 'images/arrow.svg',
          url: 'https://arrow.apache.org/'
        },
        {
          src: 'images/parquet.svg',
          url: 'https://parquet.apache.org/'
        },
      ],
    },

    // Two-Column Info Section
    {
      type: 'info-block',
      title: 'Why IceGate?',
      backgroundColor: '#1a1a2e',
      leftContent: {
        title: 'The Problem',
        text: `Traditional observability platforms lock you into vendor-specific formats and expensive infrastructure. IceGate solves these problems by providing a cost-effective, scalable, and open observability data lake.`,
      },
      rightContent: {
        title: 'Our Solution',
        text: `IceGate stores all data—WAL, catalog, and data layer—in object storage using open formats. Query your observability data with any Iceberg-compatible tool. Scale compute independently. Pay object storage prices, not observability platform prices.`,
      },
    },

    // Use Cases Section
    {
      type: 'extended-features-block',
      title: {
        text: 'Use Cases',
      },
      description: 'IceGate fits seamlessly into modern observability workflows.',
      animated: true,
      colSizes: {
        all: 12,
        sm: 6,
        md: 6,
        lg: 6,
      },
      items: [
        {
          title: 'Cost-Effective Observability',
          text: 'Reduce observability costs by 10x or more by leveraging object storage instead of expensive block storage or proprietary solutions.',
        },
        {
          title: 'Multi-Tenant Scaling',
          text: 'Scale components independently based on demand. Handle spikes in one tenant without affecting others.',
        },
        {
          title: 'Long-Term Data Retention',
          text: 'Keep observability data for years at object storage prices. Query historical data without rehydration.',
        },
        {
          title: 'Real-Time Monitoring',
          text: 'Live data access through WAL combined with historical queries. Get alerts in real-time while analyzing trends.',
        },
      ],
    },

    // Get Started & Contact Section
    {
      type: 'info-block',
      title: 'Get Started',
      backgroundColor: '#1a1a2e',
      leftContent: {
        title: 'Ready to Get Started?',
        text: `Join the open-source observability revolution.`,
        links: [
          {
            text: 'Documentation',
            url: 'https://docs.icegate.tech',
            theme: 'normal',
          },
          {
            text: 'GitHub',
            url: 'https://github.com/icegatetech/icegate',
            theme: 'normal',
          },
        ],
      },
      rightContent: {
        title: 'Contact Us',
        text: `For support, feedback, or collaboration, please reach out to us.`,
        links: [
          {
            text: 'Email Us',
            url: 'mailto:contact@icegate.team',
            theme: 'normal',
          },
          {
            text: 'Join Slack',
            url: 'https://join.slack.com/t/icegate/shared_invite/zt-3ln3iae5z-YPz8piGJgbv~Zcc1Ev14OA',
            theme: 'normal',
          },
        ],
      },
    },
  ],
};
