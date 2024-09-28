# Property Filter Component

This README provides an overview of the `PropertyFilter` component, its functionality, and how to integrate it into your React application.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Functionality](#functionality)
- [License](#license)

## Overview

The `PropertyFilter` component is a React-based UI component that allows users to filter and sort a list of properties based on various criteria. It includes search functionality, location filtering, price range selection, bedroom count filtering, and sorting options.

## Installation

To use the `PropertyFilter` component, you need to have a React environment set up. If you haven't already, create a new React app using Create React App or your preferred method. Then, include the `PropertyFilter` component in your project.

1. Install React (if not already installed):

   ```bash
   npx create-next-app my-app
   cd my-app
   ```

2. Create a new file named `PropertyFilter.tsx` and copy the component code into it.

3. Make sure to create the necessary child components (`PropertyList` and `PropertyFilterControls`).

## Usage

To use the `PropertyFilter` component, import it into your main component and provide it with an array of property data.

```jsx
import React from 'react';
import PropertyFilter from './PropertyFilter';

const App = () => {
  const properties = [
    // Array of property objects
  ];

  return (
    <div>
      <PropertyFilter data={properties} />
    </div>
  );
};

export default App;
```

## Props

The `PropertyFilter` component accepts the following props:

| Prop     | Type              | Description                               |
|----------|-------------------|-------------------------------------------|
| `data`   | `Property[]`      | An array of property objects to filter.   |

### Property Object Structure

Each property object should follow this structure:

```typescript
interface Property {
  _id: any;                 // Unique identifier
  title: string;           // Property title
  description: string;     // Property description
  location: string;        // Location of the property
  price_per_night: number; // Price per night
  bedrooms: number;        // Number of bedrooms
  amenities: string[];     // Array of amenities
  image_url: string;       // Image URL for the property
  latitude: number;        // Latitude for distance calculation
  longitude: number;       // Longitude for distance calculation
  distance?: number;       // Optional distance from the user
}
```

## Functionality

- **Search**: Users can search for properties by title.
- **Location Filter**: Filter properties based on the specified location.
- **Price Range**: Filter properties by price range (e.g., "100-200").
- **Bedrooms**: Filter properties based on the number of bedrooms.
- **Sorting**: Sort properties by price (ascending or descending) or by distance from a hardcoded user location.

### Loading State

While the properties are being loaded, a loading message is displayed to the user.

### Distance Calculation

A simple distance calculation is included, using a hardcoded user location (latitude: 37.7749, longitude: -122.4194) for demonstration purposes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
