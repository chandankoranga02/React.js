import React, { Component } from 'react'
import NewsItem from '../NewsItem'

export default class newsletter extends Component {


  constructor() {
    super();
    this.state = { 
      articles: [],
      page : 1
     }
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aab049df96574c2cb98bee727ba6443e&page=1&pagesize=18`;
    let data = await fetch(url);
    let FetchData = await data.json();
    this.setState({ articles: FetchData.articles, totalResults: FetchData.totalResults })
  }



    PreviousBTN = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aab049df96574c2cb98bee727ba6443e&page=${this.state.page -1}&pagesize=18`;
    let data = await fetch(url);
    let FetchData = await data.json();
    this.setState({ 
      articles: FetchData.articles,
      page : this.state.page-1
     })}

    NextBTN = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=aab049df96574c2cb98bee727ba6443e&page=${this.state.page + 1}&pagesize=18`;
    let data = await fetch(url);
    let FetchData = await data.json();
    this.setState({ 
      articles: FetchData.articles,
      page : this.state.page+1
     })}



  render() {

    return (

      <div>

        <div className='container my-4'>
          <h1 className='my-3'>ApkiNews - Top Headlines</h1>
          <div className='row'>

            {this.state.articles.map((element) => {
              return <div key={element.url} className="col-sm-12 col-md-6 col-lg-4 my-2">
                <NewsItem
                  title={element.title === null ? "" : element.title.slice(0, 67)}
                  description={element.description === null ? "" : element.description.slice(0, 68)}
                  url={element.url}
                  urlToImage={element.urlToImage === null ? "https://home.treasury.gov/system/files/291/treasury-preview-1900x950.jpg" : element.urlToImage} />
              </div>

            })}

          </div>
        </div>
        <div className='container my-2 d-flex justify-content-between'> 
          <button hidden={this.state.page === 1} type="button" className="btn btn-dark" onClick={this.PreviousBTN}> &larr; Previous</button>
          <button hidden={this.state.page + 1 >= Math.ceil(this.state.totalResults /18 )} type="button" className="btn btn-dark" onClick={this.NextBTN}>Next &rarr; </button>
        </div>

      </div>
    )
  }
}
