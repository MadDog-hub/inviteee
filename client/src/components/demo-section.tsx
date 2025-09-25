import { useState } from "react";
import { Heart, Briefcase, Cake, CheckCircle, Users, MessageSquare } from "lucide-react";

export default function DemoSection() {
  const [activeDemo, setActiveDemo] = useState('wedding');

  const demoTabs = [
    { id: 'wedding', icon: Heart, label: 'Wedding' },
    { id: 'corporate', icon: Briefcase, label: 'Corporate' },
    { id: 'birthday', icon: Cake, label: 'Birthday' }
  ];

  return (
    <section id="demo" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10"></div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" data-testid="demo-title">
            See Your Events Come to Life
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="demo-subtitle">
            Experience how our AI creates stunning, personalized event websites that adapt to your guests' needs in real-time.
          </p>
        </div>

        {/* Demo Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-card/50 blur-overlay rounded-xl p-2 border border-border/50">
            {demoTabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveDemo(tab.id)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                    activeDemo === tab.id
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-secondary text-muted-foreground hover:text-foreground'
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
            <div className="bg-card/30 blur-overlay rounded-2xl border border-border/50 overflow-hidden" data-testid="wedding-demo">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Sarah & Michael's Wedding</h3>
                    <p className="text-muted-foreground">June 15, 2024 • Boracay Beach Resort</p>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">RSVP Status</div>
                    <div className="text-2xl font-bold gradient-text" data-testid="rsvp-count">87/100</div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* RSVP Management */}
                  <div className="bg-background/50 rounded-xl p-6 border border-border/30" data-testid="rsvp-management">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="text-green-500 mr-3 h-5 w-5" />
                      <h4 className="font-semibold">Smart RSVP</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-sm">Attending</span>
                        <span className="text-sm font-semibold text-green-500">72</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Not Attending</span>
                        <span className="text-sm font-semibold text-red-500">15</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm">Pending</span>
                        <span className="text-sm font-semibold text-yellow-500">13</span>
                      </div>
                    </div>
                  </div>

                  {/* Seating Chart */}
                  <div className="bg-background/50 rounded-xl p-6 border border-border/30" data-testid="seating-chart">
                    <div className="flex items-center mb-4">
                      <Users className="text-blue-500 mr-3 h-5 w-5" />
                      <h4 className="font-semibold">AI Seating</h4>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-primary/20 rounded p-2 text-xs text-center">Table 1<br/>8/8</div>
                      <div className="bg-primary/20 rounded p-2 text-xs text-center">Table 2<br/>6/8</div>
                      <div className="bg-primary/20 rounded p-2 text-xs text-center">Table 3<br/>8/8</div>
                    </div>
                    <p className="text-xs text-muted-foreground">Auto-arranged by relationships</p>
                  </div>

                  {/* Guest Messages */}
                  <div className="bg-background/50 rounded-xl p-6 border border-border/30" data-testid="guestbook">
                    <div className="flex items-center mb-4">
                      <MessageSquare className="text-pink-500 mr-3 h-5 w-5" />
                      <h4 className="font-semibold">Guestbook</h4>
                    </div>
                    <div className="space-y-3 text-xs">
                      <div className="bg-muted/20 rounded p-2">
                        <div className="font-medium">Emma Johnson</div>
                        <div className="text-muted-foreground">"Can't wait to celebrate with you both!"</div>
                      </div>
                      <div className="bg-muted/20 rounded p-2">
                        <div className="font-medium">David Chen</div>
                        <div className="text-muted-foreground">"Wishing you endless happiness together"</div>
                      </div>
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
