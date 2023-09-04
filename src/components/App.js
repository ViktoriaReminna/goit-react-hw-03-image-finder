import { Component } from 'react';
import { LoaderComponent } from './Loader/Loader';
import * as Service from '../service/image-api'; // Імпорт Api з правильним шляхом
import { SearchBar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    isModalOpen: false, // Додайте цей стан
    selectedImage: null,
  };

  changeQuery = newQuery => {
    this.setState(
      {
        query: newQuery,
        images: [],
        page: 1,
      },
      this.fetch // Додавання виклику методу fetch як колбеку після оновлення стану
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.fetch();
    }
  }

  fetch = async () => {
    const { query, page } = this.state;

    try {
      this.setState({ isLoading: true });
      const result = await Service.getImages(query, page); // Виправлення Api на Api

      this.setState(prevState => {
        return {
          images: [...prevState.images, ...result], // Виправлення поля result.photos на просто result
        };
      });
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false }); // Встановлення isLoading в false після завершення завантаження
    }
  };

  handleLoadMore = () => {
    this.setState(
      prevState => ({ page: prevState.page + 1 }),
      this.fetch // Додавання виклику методу fetch як колбеку після оновлення стану
    );
  };
  handleImageClick = imageUrl => {
    this.setState({ selectedImage: imageUrl });
  };
  openModal = imageUrl => {
    this.setState({ isModalOpen: true, selectedImage: imageUrl });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, selectedImage: null });
  };
  render() {
    const { images, isLoading, isModalOpen, selectedImage } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.changeQuery} />{' '}
        {isLoading ? (
          <LoaderComponent />
        ) : (
          <ImageGallery>
            {images.map((image, index) => (
              <ImageGalleryItem
                key={image.id || index}
                imageUrl={image.webformatURL}
                alt={image.tags}
                onClick={() => this.openModal(image.largeImageURL)}
              />
            ))}
          </ImageGallery>
        )}
        <Button
          onClick={this.handleLoadMore}
          isHidden={images.length === 0 || isLoading}
        />
        {isModalOpen && (
          <Modal
            isOpen={!!selectedImage}
            imageUrl={selectedImage}
            alt=""
            onClose={() => this.setState({ selectedImage: null })}
          />
        )}
      </div>
    );
  }
}
