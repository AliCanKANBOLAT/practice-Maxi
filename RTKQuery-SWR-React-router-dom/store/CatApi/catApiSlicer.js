import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const URL = import.meta.env.VITE_CAT_API_URL;
const KEY = import.meta.env.VITE_CAT_API_KEY;

export const catApiSlice = createApi({
  reducerPath:"catApi",
  baseQuery : fetchBaseQuery({
    baseUrl: URL,
    prepareHeaders(headers) {
      headers.set("x-api-key", KEY)
      return headers
    }
  }), endpoints(builder){
    return{
      fetchCategories : builder.query({
        query () {
          return "/breeds"
        }
      }),
      fetchCategory : builder.query({
        query (categoryName) {
          return `images/search?breed_ids=${categoryName}&limit=10`
        }
      })
    }
  }
})

export const { useFetchCategoriesQuery, useFetchCategoryQuery } = catApiSlice