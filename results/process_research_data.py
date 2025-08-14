import pandas as pd
import os
import glob
import re

def generate_tags(title, abstract, authors, journal, category):
    """Generate comprehensive tags based on article content."""
    
    tags = set()
    text = f"{title} {abstract}".lower()
    
    # MC1R General tags
    if category == 'MC1R General':
        # Core MC1R concepts
        if 'mc1r' in text or 'melanocortin' in text:
            tags.update(['MC1R', 'Melanocortin Receptor', 'Genetic Variants'])
        
        # Skin cancer types
        if 'melanoma' in text:
            tags.add('Melanoma')
        if 'basal cell' in text or 'bcc' in text:
            tags.add('Basal Cell Carcinoma')
        if 'squamous cell' in text or 'scc' in text:
            tags.add('Squamous Cell Carcinoma')
        if 'skin cancer' in text:
            tags.add('Skin Cancer')
        
        # Pigmentation and genetics
        if 'pigmentation' in text or 'melanin' in text:
            tags.update(['Skin Pigmentation', 'Melanin'])
        if 'red hair' in text or 'redhead' in text:
            tags.update(['Red Hair', 'Redhead Phenotype'])
        if 'fair skin' in text or 'light skin' in text:
            tags.add('Fair Skin')
        if 'freckles' in text:
            tags.add('Freckles')
        
        # UV and sun exposure
        if 'uv' in text or 'ultraviolet' in text:
            tags.update(['UV Radiation', 'Sun Exposure'])
        if 'sunburn' in text:
            tags.add('Sunburn')
        if 'photoprotection' in text:
            tags.add('Photoprotection')
        
        # Genetic concepts
        if 'polymorphism' in text or 'variant' in text:
            tags.add('Genetic Polymorphisms')
        if 'mutation' in text:
            tags.add('Genetic Mutations')
        if 'hereditary' in text or 'familial' in text:
            tags.add('Hereditary Cancer')
        if 'genome' in text or 'genomic' in text:
            tags.add('Genomics')
        
        # Risk factors
        if 'risk' in text:
            tags.add('Cancer Risk')
        if 'susceptibility' in text:
            tags.add('Genetic Susceptibility')
        
        # Molecular biology
        if 'signaling' in text or 'pathway' in text:
            tags.add('Cell Signaling')
        if 'receptor' in text:
            tags.add('Receptor Biology')
        if 'dna' in text or 'genetic' in text:
            tags.add('DNA Damage')
        
        # Clinical aspects
        if 'clinical' in text or 'diagnosis' in text:
            tags.add('Clinical Research')
        if 'treatment' in text or 'therapy' in text:
            tags.add('Treatment')
        if 'prevention' in text:
            tags.add('Prevention')
    
    # SPF Compounds tags
    elif category == 'SPF Compounds':
        # UV filters
        if 'oxybenzone' in text or 'benzophenone' in text:
            tags.update(['Oxybenzone', 'Benzophenone-3', 'BP-3'])
        if 'avobenzone' in text:
            tags.add('Avobenzone')
        if 'octinoxate' in text:
            tags.add('Octinoxate')
        if 'homosalate' in text:
            tags.add('Homosalate')
        if 'octocrylene' in text:
            tags.add('Octocrylene')
        if 'octisalate' in text:
            tags.add('Octisalate')
        if 'tinosorb' in text:
            tags.add('Tinosorb')
        if 'mexoryl' in text:
            tags.add('Mexoryl')
        if 'ensulizole' in text:
            tags.add('Ensulizole')
        
        # Inorganic filters
        if 'zinc oxide' in text or 'zno' in text:
            tags.add('Zinc Oxide')
        if 'titanium dioxide' in text or 'tio2' in text:
            tags.add('Titanium Dioxide')
        
        # Health effects
        if 'endocrine' in text or 'hormone' in text:
            tags.add('Endocrine Disruption')
        if 'allergy' in text or 'allergic' in text:
            tags.add('Allergic Reactions')
        if 'toxicity' in text or 'toxic' in text:
            tags.add('Toxicity')
        if 'absorption' in text:
            tags.add('Systemic Absorption')
        if 'biomonitoring' in text:
            tags.add('Human Biomonitoring')
        
        # Environmental impact
        if 'environmental' in text or 'environment' in text:
            tags.add('Environmental Impact')
        if 'coral' in text or 'reef' in text:
            tags.add('Coral Reef Damage')
        if 'water' in text or 'aquatic' in text:
            tags.add('Water Contamination')
        if 'fish' in text:
            tags.add('Fish Toxicity')
        
        # Regulatory and safety
        if 'regulatory' in text or 'regulation' in text:
            tags.add('Regulatory Assessment')
        if 'safety' in text:
            tags.add('Safety Assessment')
        if 'risk assessment' in text:
            tags.add('Risk Assessment')
        
        # Exposure and monitoring
        if 'exposure' in text:
            tags.add('Human Exposure')
        if 'urinary' in text or 'urine' in text:
            tags.add('Urinary Biomarkers')
        if 'blood' in text or 'serum' in text:
            tags.add('Blood Biomarkers')
    
    # Common tags for both categories
    if 'review' in text or 'meta-analysis' in text:
        tags.add('Review')
    if 'study' in text or 'research' in text:
        tags.add('Research Study')
    if 'epidemiology' in text or 'epidemiological' in text:
        tags.add('Epidemiology')
    if 'molecular' in text:
        tags.add('Molecular Biology')
    if 'clinical trial' in text:
        tags.add('Clinical Trial')
    if 'in vitro' in text:
        tags.add('In Vitro Study')
    if 'in vivo' in text:
        tags.add('In Vivo Study')
    if 'animal' in text or 'rodent' in text:
        tags.add('Animal Studies')
    if 'human' in text:
        tags.add('Human Studies')
    
    # Add category-specific tags
    if category == 'MC1R General':
        tags.add('MC1R Research')
    elif category == 'SPF Compounds':
        tags.add('Sunscreen Research')
    
    return sorted(list(tags))

def generate_teaser(title, abstract, authors, journal):
    """Generate a catchy teaser line for the article."""
    
    # Extract key concepts from title and abstract
    text = f"{title} {abstract}".lower()
    
    # Look for key MC1R-related terms
    mc1r_terms = ['mc1r', 'melanocortin', 'red hair', 'redhead', 'pigmentation', 'melanin']
    spf_terms = ['sunscreen', 'uv filter', 'spf', 'photoprotection', 'oxybenzone', 'avobenzone', 'octinoxate']
    
    # Determine primary focus
    mc1r_score = sum(1 for term in mc1r_terms if term in text)
    spf_score = sum(1 for term in spf_terms if term in text)
    
    # Generate teaser based on focus
    if mc1r_score > spf_score:
        if 'red hair' in text or 'redhead' in text:
            return "Red hair genetics and MC1R's role in skin cancer risk"
        elif 'pigmentation' in text:
            return "MC1R's influence on skin pigmentation and UV protection"
        elif 'melanin' in text:
            return "Melanin synthesis and MC1R signaling pathways"
        else:
            return "MC1R genetics and its impact on skin cancer susceptibility"
    else:
        if 'sunscreen' in text:
            return "Sunscreen ingredients and their environmental health effects"
        elif 'uv filter' in text:
            return "UV filter compounds and their safety profile"
        elif 'photoprotection' in text:
            return "Photoprotection mechanisms and sunscreen efficacy"
        else:
            return "Sunscreen compounds and their biological effects"

def process_csv_files():
    """Process all CSV files and create a comprehensive research database."""
    
    all_articles = []
    
    # Process MC1R file first (main category)
    mc1r_file = "MC1R_PubMed_Results.csv"
    if os.path.exists(mc1r_file):
        df = pd.read_csv(mc1r_file)
        print(f"Processing {mc1r_file}: {len(df)} articles")
        
        for _, row in df.iterrows():
            article = {
                'pmid': str(row['PMID']),
                'title': row['Title'],
                'abstract': row['Abstract'],
                'authors': row['Authors'],
                'journal': row['Journal'],
                'year': int(row['Year']),
                'keywords': row['Keywords'],
                'url': row['URL'],
                'affiliations': row['Affiliations'],
                'category': 'MC1R General',
                'teaser': generate_teaser(row['Title'], row['Abstract'], row['Authors'], row['Journal']),
                'tags': generate_tags(row['Title'], row['Abstract'], row['Authors'], row['Journal'], 'MC1R General')
            }
            all_articles.append(article)
    
    # Process SPF compound files
    spf_files = glob.glob("*_PubMed_Results.csv")
    spf_files = [f for f in spf_files if f != mc1r_file]
    
    for file in spf_files:
        if os.path.exists(file):
            df = pd.read_csv(file)
            print(f"Processing {file}: {len(df)} articles")
            
            # Extract compound name from filename
            compound_name = file.replace('_PubMed_Results.csv', '')
            
            for _, row in df.iterrows():
                article = {
                    'pmid': str(row['PMID']),
                    'title': row['Title'],
                    'abstract': row['Abstract'],
                    'authors': row['Authors'],
                    'journal': row['Journal'],
                    'year': int(row['Year']),
                    'keywords': row['Keywords'],
                    'url': row['URL'],
                    'affiliations': row['Affiliations'],
                    'category': 'SPF Compounds',
                    'teaser': generate_teaser(row['Title'], row['Abstract'], row['Authors'], row['Journal']),
                    'tags': generate_tags(row['Title'], row['Abstract'], row['Authors'], row['Journal'], 'SPF Compounds')
                }
                all_articles.append(article)
    
    # Remove duplicates based on PMID
    seen_pmids = set()
    unique_articles = []
    for article in all_articles:
        if article['pmid'] not in seen_pmids:
            seen_pmids.add(article['pmid'])
            unique_articles.append(article)
    
    print(f"\nTotal unique articles: {len(unique_articles)}")
    print(f"MC1R General: {len([a for a in unique_articles if a['category'] == 'MC1R General'])}")
    print(f"SPF Compounds: {len([a for a in unique_articles if a['category'] == 'SPF Compounds'])}")
    
    return unique_articles

def create_typescript_file(articles):
    """Create a TypeScript file with the research data."""
    
    ts_content = """export interface ResearchArticle {
      pmid: string;
      title: string;
      abstract: string;
      authors: string;
      journal: string;
      year: number;
      keywords: string;
      url: string;
      affiliations: string;
      category: 'MC1R General' | 'SPF Compounds';
      teaser: string;
      tags: string[];
    }
    
    export const researchArticles: ResearchArticle[] = [
    """
    
    for article in articles:
        # Escape quotes in strings
        title = article['title'].replace('"', '\\"')
        abstract = article['abstract'].replace('"', '\\"').replace('\n', '\\n')
        authors = article['authors'].replace('"', '\\"')
        journal = article['journal'].replace('"', '\\"')
        keywords = article['keywords'].replace('"', '\\"')
        affiliations = article['affiliations'].replace('"', '\\"') if pd.notna(article['affiliations']) else ''
        teaser = article['teaser'].replace('"', '\\"')
        
        # Format tags array
        tags_str = ', '.join([f'"{tag}"' for tag in article['tags']])
        
        ts_content += f"""  {{
        pmid: "{article['pmid']}",
        title: "{title}",
        abstract: "{abstract}",
        authors: "{authors}",
        journal: "{journal}",
        year: {article['year']},
        keywords: "{keywords}",
        url: "{article['url']}",
        affiliations: "{affiliations}",
        category: "{article['category']}",
        teaser: "{teaser}",
        tags: [{tags_str}]
      }},
    """
    
    ts_content += """];
    
    export const categories = ['MC1R General', 'SPF Compounds'] as const;
    """
    
    # Write to file
    with open('../src/data/researchArticles.ts', 'w', encoding='utf-8') as f:
        f.write(ts_content)
    
    print(f"Created TypeScript file with {len(articles)} articles")

if __name__ == "__main__":
    articles = process_csv_files()
    create_typescript_file(articles) 