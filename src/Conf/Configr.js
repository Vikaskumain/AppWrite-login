
const Configr ={
   appWriteUrl :String(import.meta.env.VITE_APPWRITE_ENDPOIN),
   appWriteProjecturl :String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
   appWriteDatabaseId :String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
   appWriteBuckedId :String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
   appWriteCollectionID :String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
}

export default Configr;