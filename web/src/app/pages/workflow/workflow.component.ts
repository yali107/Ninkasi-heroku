import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workflow',
  templateUrl: './workflow.component.html',
  styleUrls: ['./workflow.component.scss']
})
export class WorkflowComponent implements OnInit {
  size: number = 40;
  expandEnabled: boolean = true;

  entries = [
    {
      header: 'I. Web Scraping',
      img: '../../assets/about/1.jpg',
      content: '280,000 beer reviews, info and ratings are scraped from ratebeer.com using Python Scrapy package',
      link: false
    },
    {
      header: 'II. Data Cleaning',
      img: '../../assets/about/2.jpg',
      content: 'Beer info and rating data are cleaned. Text mining, tokenization, spell check and lemmatization are performed on beer reviews',
      link: false
    },
    {
      header: 'III. Content-Based',
      img: '../../assets/about/3.jpg',
      content: 'Term Frequency–Inverse Document Frequency (TF-IDF) are calculated on document-term matrix, ' +
        'Latent Semantic Indexing (LSI) is applied, and cosine similarity matrix is generated.',
      link: false
    },
    {
      header: 'IV. Collaborative Filtering',
      img: '../../assets/about/4.jpg',
      content: 'Two algorithms are applied. A Matrix factorization method-SVD++ and an unsupervised ' +
        'deep learning technique-Restricted Boltzmann Machine (RBM). The results from two methods are combined to reconstruct user-item matrix.',
        link: false
    },
    {
      header: 'V. Ninkasi App',
      img: '../../assets/about/5.jpg',
      content: ['Content-Base Recommender', 'Collaborative Filtering Recommender'],
      link: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

}
