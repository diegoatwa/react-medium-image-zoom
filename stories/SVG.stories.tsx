import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Zoom from '../source'
import '../source/styles.css'
import './base.css'

export default {
  title: '<svg>',
  component: Zoom,
  parameters: {},
} as ComponentMeta<typeof Zoom>

export const AnimatingSquare: ComponentStory<typeof Zoom> = (props) => (
  <div>
    <h1>An animating square SVG with its width & height set via style</h1>
    <div className="mw-600">
      <figure>
        <Zoom {...props}>
          <svg
            aria-label="SVG animating from a circle to a square and back again on repeat"
            role="img"
            style={{ width: '10rem', height: '10rem' }}
            viewBox="0 0 10 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="10" height="10">
              <animate attributeName="rx" values="0;5;0" dur="10s" repeatCount="indefinite" />
            </rect>
          </svg>
        </Zoom>
        <figcaption>
          <a href="https://developer.mozilla.org/en-US/docs/Web/SVG/Element/animate">
            Animation MDN source
          </a>
        </figcaption>
      </figure>
    </div>
  </div>
)

export const BirdOnBackground: ComponentStory<typeof Zoom> = () => (
  <div>
    <h1>A bird SVG on a non-SVG background</h1>
    <div className="mw-600">
      <div
        style={{
          backgroundColor: '#ccebff',
          borderRadius: '0 30px 0 30px',
          padding: '1rem',
          width: '20rem',
          height: 'auto',
        }}
      >
        <Zoom>
          <svg
            aria-label="Outline of a bird"
            role="img"
            viewBox="203.337 154.583 197.077 399.551"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M382.92 542.2c-9.764-18.504-9.496-18.288-14.537-11.773-2.346 3.033-4.813 5.515-5.482 5.515-1.146 0-2.381-5.274-3.749-15.993-.326-2.553-2.368-11.909-4.539-20.795-2.171-8.884-3.947-17.755-3.947-19.713 0-5.187-8.713-32.977-11.055-35.258-1.098-1.068-5.249-2.104-9.227-2.301-6.258-.309-7.674.195-10.506 3.745-1.8 2.257-5.454 5.011-8.12 6.12-6.331 2.636-34.301 27.32-35.628 31.443-.565 1.755-.208 7.019.794 11.697 2.196 10.26.744 15.06-5.986 19.785-4.401 3.091-6.587 2.529-3.192-.818 2.655-2.618 3.638-15.329 1.567-20.26-1.059-2.521-2.457-4.582-3.107-4.582-1.438 0-15.973 14.122-19.175 18.63-1.265 1.781-2.299 2.383-2.299 1.338 0-3.677 4.293-11.697 8.982-16.782 2.607-2.827 4.375-5.722 3.93-6.434-1.133-1.808-12.523-1.623-13.679.221-1.171 1.868-3.838 1.996-3.838.183 0-2.261 7.987-4.643 18.241-5.438 11.055-.858 14.614-3.177 34.988-22.78l11.044-10.628-.046-11.537c-.045-11.305-.16-11.645-5.653-16.704-10.138-9.337-8.35-8.974-35.732-7.271l-25.145 1.563-4.955 5.651-4.955 5.651.924-4.92c.903-4.806.797-4.92-4.587-4.92-5.253 0-13.199 5.064-19.003 12.111-1.663 2.018-1.875 2.018-1.914 0-.075-3.941 5.929-12.126 10.018-13.66 4.691-1.758 3.587-4.506-1.81-4.506-2.111 0-3.473-.583-3.027-1.295s17.413-.958 37.705-.545c30.851.627 36.888.406 36.862-1.354-.017-1.158-4.187-7.555-9.266-14.215-11.746-15.405-23.752-39.382-26.152-52.227-2.618-14.016-2.633-41.653-.027-49.956 6.496-20.695 12.631-38.346 14.702-42.295 4.322-8.24 3.126-13.504-4.76-20.954-8.465-7.997-10.757-7.984-29.315.167-15.287 6.714-18.843 7.754-18.843 5.507 0-1.773 4.448-6.357 16.537-17.042 6.143-5.429 6.492-6.187 6.492-14.078 0-4.587 1.009-10.264 2.242-12.615 2.798-5.335 24.339-22.823 28.114-22.823.72 0 4.721-1.607 8.89-3.572 13.678-6.446 18.768-7.454 33.749-6.681 22.029 1.136 38.123 9.608 49.848 26.24 6.537 9.276 18.056 35.586 18.546 42.366.237 3.292 3.162 11.434 6.497 18.095 15.755 31.461 20.018 50.267 20.074 88.559.046 31.502-1.649 40.68-13.039 70.58-4.748 12.462-6 17.826-6 25.7 0 9.021 3.813 45.038 5.354 50.562.348 1.248 1.043 7.721 1.545 14.381.501 6.66 1.259 13.884 1.685 16.051.425 2.166 1.35 12.708 2.055 23.428 1.91 27.91.58 29.59-9.02 11.4zm4.8-25.18c-.824-3.331-1.937-10.824-2.473-16.652s-2.283-22.177-3.883-36.331c-1.6-14.155-3.365-30.072-3.923-35.372-.879-8.355-2.854-12.956-14.855-34.596-12.692-22.887-21.591-42.298-23.288-50.796-.369-1.853-2.504-8.818-4.742-15.479-5.297-15.758-5.547-33.847-.648-46.929 6.752-18.03 14.971-30.776 29.343-45.511l7.478-7.666-2.163-8.986c-2.478-10.29-12.282-31.084-16.383-34.743-2.614-2.333-2.911-1.991-5.486 6.347-2.913 9.427-3.211 20.345-1.036 37.957.955 7.742.824 12.222-.445 15.199-1.011 2.37-9.133 9.942-18.514 17.261-19.104 14.904-36.065 31.987-40.75 41.041-4.958 9.584-8.874 21.833-11.224 35.113-2.631 14.869-.703 28.211 6.868 47.511 3.939 10.043 7.183 15.161 15.535 24.506l10.555 11.81v13.72c0 11.406.403 13.719 2.39 13.719 2.707 0 10.998-8.393 12.307-12.457 1.033-3.207 5.262-3.608 5.262-.498 0 1.486 2.08 2.333 6.506 2.65 5.812.415 6.862 1.109 9.868 6.521 3.452 6.214 8.831 24.556 10.547 35.967.532 3.531 2.26 11.869 3.841 18.53 1.582 6.661 3.342 15.687 3.91 20.059 1.134 8.706 2.834 9.986 5.525 4.162 3.406-7.373 6.353-4.643 17.969 16.652l2.478 4.542.466-10.598c.23-5.81-.24-13.31-1.06-16.64zm-70.46-259.57c8.086-9.312 13.233-25.08 14.345-43.947 1.056-17.908 2.918-26.446 7.003-32.102 1.749-2.422 2.911-4.67 2.582-4.994-.33-.325-6.795-1.042-14.369-1.595l-13.77-1.004-2.984 5.088c-3.554 6.057-4.399 6.893-12.378 12.229-6.64 4.44-15.773 8.079-17.07 6.799-.441-.435.335-2.959 1.725-5.61 3.479-6.634 2.114-9.112-4.939-8.971-10.112.203-17.733 3.329-21.481 8.813-1.905 2.787-3.034 5.751-2.51 6.587s2.002-.186 3.286-2.271c3.331-5.413 9.781-8.704 17.056-8.704 5.064 0 6.288.538 6.288 2.764 0 5.977-14.439 13.688-22.086 11.796-2.206-.546-3.524-.18-3.564.991-.035 1.022-.541 3.616-1.125 5.765-.903 3.322-.185 4.556 4.797 8.245 3.222 2.386 13.804 11.19 23.515 19.566 30.57 26.37 30.59 26.38 35.66 20.54z" />
          </svg>
        </Zoom>
      </div>
    </div>
  </div>
)
