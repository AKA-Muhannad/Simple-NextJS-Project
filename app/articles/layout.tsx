import { ReactNode } from 'react';
export const metadata = {
    title: "Articles Page",
}
type LayoutProps = {
    children: ReactNode;
}
//                              props
export default function Layout({ children }: LayoutProps) {
    return (
        <><div>
            <h1>Articles Layout</h1>
        </div><div
            style={{
                marginTop: "50px",
                background: "indigo",
                padding: "20px",
                borderRadius: "10px"
            }}>
                {children}
            </div></>
    )
}