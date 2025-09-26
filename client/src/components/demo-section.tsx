import { useState } from "react";
import { Heart, Briefcase, Cake, CheckCircle, Users, MessageSquare } from "lucide-react";

export default function DemoSection() {
  const [activeDemo, setActiveDemo] = useState('wedding');

  const demoTabs = [
    { id: 'wedding', icon: Heart, label: 'Wedding' },
    { id: 'corporate', icon: Briefcase, label: 'Corporate' },
    { id: 'birthday', icon: Cake, label: 'Debutant' }
  ];

  return (
    <section id="demo" className="section-padding bg-white">
      <div className="container-width">
        <div className="text-center mb-16">
          <h2 className="text-heading text-foreground mb-6" data-testid="demo-title">
            See Your Events Come to Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="demo-subtitle">
            Experience how our AI creates stunning, personalized event websites that adapt to your guests' needs in real-time.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 rounded-lg p-1 inline-flex">
            {demoTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id)}
                  className={`px-6 py-3 rounded-md font-medium transition-all ${
                    activeDemo === tab.id
                      ? 'bg-white text-foreground shadow-sm'
                      : 'hover:bg-white/50 text-muted-foreground hover:text-foreground'
                  }`}
                  data-testid={`demo-tab-${tab.id}`}
                >
                  <Icon className="mr-2 h-4 w-4 inline" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Demo Content */}
        <div className="max-w-6xl mx-auto">
          {activeDemo === 'wedding' && (
            <div className="card-minimal" data-testid="wedding-demo">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Sarah & Michael's Wedding</h3>
                  <p className="text-muted-foreground">June 15, 2024 • Boracay Beach Resort</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">RSVP Status</div>
                  <div className="text-2xl font-bold text-primary" data-testid="rsvp-count">142/150</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* RSVP Management */}
                <div className="bg-gray-50 rounded-lg p-6" data-testid="rsvp-management">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-green-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Smart RSVP</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Attending</span>
                      <span className="text-sm font-medium">78</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Declined</span>
                      <span className="text-sm font-medium">9</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Pending</span>
                      <span className="text-sm font-medium">13</span>
                    </div>
                  </div>
                </div>

                {/* Guest Management */}
                <div className="bg-gray-50 rounded-lg p-6" data-testid="guest-management">
                  <div className="flex items-center mb-4">
                    <Users className="text-blue-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Guest Details</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Dietary restrictions</span>
                      <span className="text-sm font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Plus ones</span>
                      <span className="text-sm font-medium">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Special requests</span>
                      <span className="text-sm font-medium">5</span>
                    </div>
                  </div>
                </div>

                {/* Digital Guestbook */}
                <div className="bg-gray-50 rounded-lg p-6" data-testid="guestbook">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="text-purple-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Guestbook</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Messages</span>
                      <span className="text-sm font-medium">45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Photos</span>
                      <span className="text-sm font-medium">18</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Voice notes</span>
                      <span className="text-sm font-medium">7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'corporate' && (
            <div className="card-minimal" data-testid="corporate-demo">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Tech Summit 2024</h3>
                  <p className="text-muted-foreground">March 20-22, 2024 • Manila Convention Center</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">Registration Status</div>
                  <div className="text-2xl font-bold text-primary" data-testid="corporate-attendees">245/300</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-green-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Registration</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Confirmed</span>
                      <span className="text-sm font-medium">210</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Waitlist</span>
                      <span className="text-sm font-medium">35</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="text-blue-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Attendee Types</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Speakers</span>
                      <span className="text-sm font-medium">15</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">VIP</span>
                      <span className="text-sm font-medium">45</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">General</span>
                      <span className="text-sm font-medium">185</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="text-purple-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Networking</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Meeting requests</span>
                      <span className="text-sm font-medium">89</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Business cards</span>
                      <span className="text-sm font-medium">156</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeDemo === 'birthday' && (
            <div className="card-minimal" data-testid="birthday-demo">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Isabella's Debut</h3>
                  <p className="text-muted-foreground">August 15, 2024 • Garden Party Venue</p>
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">RSVP Status</div>
                  <div className="text-2xl font-bold text-primary" data-testid="birthday-attendees">98/120</div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="text-green-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Attendance</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Coming</span>
                      <span className="text-sm font-medium">38</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Maybe</span>
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Can't make it</span>
                      <span className="text-sm font-medium">8</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <Users className="text-blue-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Party Details</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Plus ones</span>
                      <span className="text-sm font-medium">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Gift registry</span>
                      <span className="text-sm font-medium">25 items</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <MessageSquare className="text-purple-500 mr-3 h-5 w-5" />
                    <h4 className="font-semibold text-foreground">Memories</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Wishes</span>
                      <span className="text-sm font-medium">31</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Photos shared</span>
                      <span className="text-sm font-medium">67</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}