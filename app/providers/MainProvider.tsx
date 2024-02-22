import {QueryClient, QueryClientProvider} from "react-query";

type MainProviderProps = {
    children?: React.ReactNode
};
export const MainProvider = ({children}: MainProviderProps) => {
    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                refetchOnWindowFocus: false
            }
        }
    });
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
}