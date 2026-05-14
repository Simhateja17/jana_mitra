import Link from 'next/link';
import { projects } from '@/src/data/projects';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        notFound();
    }

    return (
        <section className="project-detail-section">
            <div className="container">
                <div className="project-detail-header">
                    <Link href="/" className="back-btn">
                        <i className="fas fa-arrow-left"></i>
                        <span>Back to Projects</span>
                    </Link>
                </div>

                <div className="project-detail-content">
                    <div className="project-detail-left">
                        <div className="project-detail-image">
                            <img src={project.image} alt={project.title} />
                        </div>

                        {(project.additionalInfo?.landParcel || project.additionalInfo?.floor) && (
                            <div className="project-detail-additional-info">
                                {project.additionalInfo?.landParcel && (
                                    <div className="project-meta-item">
                                        <h4><i className="fas fa-map"></i> Land Parcel</h4>
                                        <p>{project.additionalInfo.landParcel}</p>
                                    </div>
                                )}
                                {project.additionalInfo?.floor && (
                                    <div className="project-meta-item">
                                        <h4><i className="fas fa-building"></i> Floor</h4>
                                        <p>{project.additionalInfo.floor}</p>
                                    </div>
                                )}
                            </div>
                        )}

                        {project.sitePlan && (
                            <div className="project-detail-site-plan">
                                <h4><i className="fas fa-map"></i> Site Plan</h4>
                                <div className="site-plan-container">
                                    <img src={project.sitePlan} alt={`${project.title} Site Plan`} loading="lazy" />
                                </div>
                            </div>
                        )}

                        {project.mapEmbed && (
                            <div className="project-detail-map">
                                <h4><i className="fas fa-map"></i> Location Map</h4>
                                <div className="map-container" dangerouslySetInnerHTML={{ __html: project.mapEmbed }} />
                            </div>
                        )}

                        {project.amenities && (
                            <div className="project-detail-amenities">
                                <h4><i className="fas fa-home"></i> Amenities of {project.title}</h4>
                                <div className="amenities-grid">
                                    {project.amenities.map((amenity, index) => (
                                        <div key={index} className="amenity-item">
                                            <i className={amenity.icon}></i>
                                            <span>{amenity.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="project-detail-right">
                        <div className="project-detail-title-section">
                            <h1 className="project-detail-title">{project.title}</h1>
                            <span className={`project-status status-${project.status}`}>
                                {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                            </span>
                        </div>

                        <p className="project-detail-location">
                            <i className="fas fa-map-marker-alt"></i>
                            {project.location}
                        </p>

                        <p className="project-detail-description">{project.description}</p>

                        {project.gallery && (
                            <div className="project-detail-gallery">
                                <h4><i className="fas fa-images"></i> Gallery</h4>
                                <div className="gallery-grid">
                                    {project.gallery.map((image, index) => (
                                        <div key={index} className="gallery-item">
                                            <img src={image} alt={`Gallery Image ${index + 1}`} loading="lazy" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.locationHighlights && (
                            <div className="project-detail-location-highlights">
                                <h4><i className="fas fa-map-marked-alt"></i> Location Highlights of {project.title}</h4>
                                <div className="location-highlights-grid">
                                    {project.locationHighlights.map((highlight, index) => (
                                        <div key={index} className="location-highlight-item">
                                            <i className="fas fa-map-marker-alt"></i>
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {project.plotDetails && (
                            <div className="project-detail-plot-details">
                                <h4><i className="fas fa-table"></i> Plot Details</h4>
                                <div className="plot-details-table-container">
                                    <table className="plot-details-table">
                                        <thead>
                                            <tr>
                                                <th>Plot No</th>
                                                <th>Facing</th>
                                                <th>Size</th>
                                                <th>Sq Feet</th>
                                                <th>Sq Yard</th>
                                                <th>Ankanams</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {project.plotDetails.map((plot, index) => (
                                                <tr key={index}>
                                                    <td>{plot.plotNo}</td>
                                                    <td>{plot.facing}</td>
                                                    <td>{plot.size}</td>
                                                    <td>{plot.sqfeet}</td>
                                                    <td>{plot.sqyard}</td>
                                                    <td>{plot.ankanams}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
