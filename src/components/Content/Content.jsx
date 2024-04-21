import { useMemo, useState } from "react"

const Content = ({ blogs }) => {


    const BlogList = useMemo(() => blogs.map((blog, index) => {
        return (
            <li className="blog" key={index}>
                <h4>{blog.title}</h4>
                <p>{blog.content}</p>
            </li>
        )
    }))

    return (
        <div className="Content">
            <div className="container">
                <div className="Content-block">
                    {BlogList}
                </div>
            </div>
        </div>
    )
}

export default Content;